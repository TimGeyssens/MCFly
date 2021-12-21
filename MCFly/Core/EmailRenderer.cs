using MCFly.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Routing;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;

namespace MCFly.Core
{
    public class EmailRenderer
    {
        private const string EmailViewPath = "~/views/partials/mcfly/emails/";

        private class FakeController : Controller
        {
        }

        public static string Render(string viewName, object model, Form form, Email email, IPublishedContent currentContent)
        {
            var viewPath = Path.Combine(EmailViewPath, viewName);
            var viewFile = new FileInfo(HostingEnvironment.MapPath(viewPath));
            if (viewFile.Exists == false)
            {
                return null;
            }
            var writer = new StringWriter();
            var context = new HttpContextWrapper(HttpContext.Current);
            var routeData = new RouteData();
            routeData.Values["controller"] = "FakeController";
            var controllerContext = new ControllerContext(new RequestContext(context, routeData), new FakeController());
            var razor = new RazorView(controllerContext, viewPath, null, false, null);
            var viewData = new ViewDataDictionary(model)
            {
                // pass the current content to the email template, because Umbraco.AssignedContentItem doesn't work out of Umbraco context
                ["currentContent"] = currentContent,
                ["form"] = form,
                ["email"] = email
            };
            razor.Render(new ViewContext(controllerContext, razor, viewData, new TempDataDictionary(), writer), writer);
            return writer.ToString();
        }

        public static IEnumerable<string> GetAllEmailTemplates()
        {
            var directory = new DirectoryInfo(HostingEnvironment.MapPath(EmailViewPath));
            if (directory.Exists == false)
            {
                return new string[] { };
            }
            return directory.GetFiles("*.cshtml").Select(f => f.Name);
        }

        public static string ParseEmailContents(object model, string content, Form form)
        {
            if (string.IsNullOrEmpty(content))
                return content;

            var s = content;

            var regex = new Regex(@"\{.[\w\.]+.\}");
            var matches = regex.Matches(content);


            foreach (Match m in matches)
            {
                var val = m.Value.Trim('{', '}');
                if (form.Fields.Any(x => x.Alias == val))
                {
                    //var fld = form.Fields.FirstOrDefault(x => x.Alias == val);

                    if (model.GetType().GetProperty(val) != null)
                        s = s.Replace(m.Value, model.GetType().GetProperty(val).GetValue(model).ToString());
                }
                
            }

            return s;
        }
    }
}