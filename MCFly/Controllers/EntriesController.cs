
using MCFly.Controllers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Web;
using System.Net.Mail;
using System.Web.Mvc;
using UIOMatic.Services;
using Umbraco.Web.Mvc;
using System.IO;
using Umbraco.Core;

namespace MCFly
{
    public class EntriesController : SurfaceController
    {
        public static IEnumerable<dynamic> GetEntries(string alias)
        {
            return UIOMaticObjectService.Instance.GetAll(UIOMatic.Helper.GetUIOMaticTypeByAlias(alias), "Created", "desc");
        }
        //public ActionResult CheckExistingEmail(string Email)
        //{
        //    bool ifEmailExist = false;
        //    try
        //    {
        //        ifEmailExist = Email.Equals("tim@nibble.be") ? true : false;
        //        return Json(!ifEmailExist, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json(false, JsonRequestBehavior.AllowGet);
        //    }
        //}

        [ChildActionOnly]
        public ActionResult RenderForm(string alias, string view = "MCFly/MCFlyForm")
        {
           
           return PartialView(view, UIOMatic.Helper.GetUIOMaticTypeByAlias(alias));

        }
        [HttpPost, ValidateInput(false)]
        [ValidateRecaptcha]
        [ValidateAntiForgeryToken]
        public ActionResult HandleAjaxForm(FormCollection frm)
        {
            var typeName = frm["FullName"];

            var form = new MCFlyApiController().GetByAlias(typeName);


            var type = UIOMatic.Helper.GetUIOMaticTypes().FirstOrDefault(x => x.FullName == typeName);

            var instance = Activator.CreateInstance(type);

            var dict = new Dictionary<string, object>();
            foreach (PropertyInfo prop in type.GetProperties())
            {
                if (prop.Name != "Id" && prop.Name != "Created" && prop.Name != "UmbracoPage")
                {
                    var fld = form.Fields.FirstOrDefault(x => x.Alias == prop.Name);


                    var val = fld.FieldType.Process(form, fld, !frm.AllKeys.Contains(prop.Name) ? null : frm[prop.Name], ControllerContext);

                    if (val != null && val.ToString() != string.Empty)
                    {
                        prop.SetValue(instance, val);
                        dict.Add(prop.Name, val);
                    }

                }
                if (prop.Name == "Created")
                {
                    prop.SetValue(instance, DateTime.Now);
                    dict.Add("Created", DateTime.Now);
                }
                if (prop.Name == "UmbracoPage")
                {
                   
                   
                    prop.SetValue(instance, frm["Umbraco.AssignedContentItem.Id"]);
                    dict.Add("UmbracoPage", frm["Umbraco.AssignedContentItem.Id"]);


                    


                }
            }

            //Server Side Validation
            //var context = new ValidationContext(instance, null, null);
            //var results = new List<ValidationResult>();

            //Validator.TryValidateObject(instance, context, results, true);

            //if (results.Any())
            //{
            //    foreach (var error in results)
            //    {

            //        ModelState.AddModelError(error.MemberNames.FirstOrDefault(), error.ErrorMessage);
            //    }

            //}

            //if (!ModelState.IsValid)
            //    return CurrentUmbracoPage();

            ////workaround for nullable string props
            foreach (PropertyInfo prop in type.GetProperties())
            {
                if (prop.Name != "Id" && prop.Name != "Created" && prop.Name != "UmbracoPage")
                {
                    if (string.IsNullOrEmpty(frm[prop.Name]) && prop.PropertyType == typeof(string))
                    {
                        var val = string.Empty;
                        if (prop.GetValue(instance) == null)
                        {
                            prop.SetValue(instance, val);
                            dict.Remove(prop.Name);
                            dict.Add(prop.Name, val);
                        }
                    }
                }
            }

            //Store Record to DB
            if (form.StoresData)
                UIOMaticObjectService.Instance.Create(type, dict);

            //Send Emails
            foreach (var email in form.Emails)
            {

                var mm = new MailMessage
                {
                    Body = EmailRenderer.Render(email.Template, instance,form,email, Umbraco.TypedContent(frm["Umbraco.AssignedContentItem.Id"])),
                    IsBodyHtml = true,
                    Subject = email.Subject ?? "New " + form.Name + " entry",
                    From = new MailAddress(email.From)

                };

                mm.To.Add(email.ToProperty != string.Empty ? new MailAddress(type.GetProperty(email.ToProperty).GetValue(instance).ToString()) : new MailAddress(email.To));

                new SmtpClient().Send(mm);
            }

            //Do more stuff
            if (!string.IsNullOrEmpty(form.WebHookUrl))
            {
                var client = new WebClient
                {
                    Encoding = Encoding.UTF8
                };
                client.Headers[HttpRequestHeader.ContentType] = "application/json";

                try
                {
                    var response = client.UploadString(form.WebHookUrl, "POST", JsonConvert.SerializeObject(dict));
                }

                catch (Exception ex)
                {
                    //log
                }
            }

            return Json(new
            {
                Success = true,
            });
        }

        [HttpPost, ValidateInput(false)]
        [ValidateRecaptcha]
        [ValidateAntiForgeryToken]
        public ActionResult HandleForm(FormCollection frm)
        {
            var typeName = frm["FullName"];

            var form = new MCFlyApiController().GetByAlias(typeName);


            var type = UIOMatic.Helper.GetUIOMaticTypes().FirstOrDefault(x => x.FullName == typeName);

            var instance = Activator.CreateInstance(type);

            var dict = new Dictionary<string, object>();
            foreach (PropertyInfo prop in type.GetProperties())
            {
                if (prop.Name != "Id" && prop.Name != "Created" && prop.Name != "UmbracoPage")
                {
                    var fld = form.Fields.FirstOrDefault(x => x.Alias == prop.Name);

                   
                    var val = fld.FieldType.Process(form, fld, !frm.AllKeys.Contains(prop.Name) ? null : frm[prop.Name], ControllerContext);

                    if(val != null && val.ToString() != string.Empty)
                    {
                        prop.SetValue(instance, val);
                        dict.Add(prop.Name, val);
                    }
                    
                }
                if (prop.Name == "Created")
                {
                    prop.SetValue(instance, DateTime.Now);
                    dict.Add("Created", DateTime.Now);
                }
                if (prop.Name == "UmbracoPage")
                {
                    //if (CurrentPage != null)
                    //{
                    prop.SetValue(instance, CurrentPage.Id.ToString());
                    dict.Add("UmbracoPage", CurrentPage.Id.ToString());
                    //}
                //else
                //{ //use form collection value
                //}
            }
            }

            //Server Side Validation
            var context = new ValidationContext(instance, null, null);
            var results = new List<ValidationResult>();

            Validator.TryValidateObject(instance, context, results, true);

            if (results.Any())
            {
                foreach (var error in results)
                {

                    ModelState.AddModelError(error.MemberNames.FirstOrDefault(), error.ErrorMessage);
                }

            }

            if (!ModelState.IsValid)
                return CurrentUmbracoPage();

            ////workaround for nullable string props
            foreach (PropertyInfo prop in type.GetProperties())
            {
                if (prop.Name != "Id" && prop.Name != "Created" && prop.Name != "UmbracoPage")
                {
                    if (string.IsNullOrEmpty(frm[prop.Name]) && prop.PropertyType == typeof(string))
                    {
                        var val = string.Empty;
                        if (prop.GetValue(instance) == null)
                        {
                            prop.SetValue(instance, val);
                            dict.Remove(prop.Name);
                            dict.Add(prop.Name, val);
                        }
                    }
                }
            }

            //Store Record to DB
            if(form.StoresData)
                UIOMaticObjectService.Instance.Create(type, dict);

            //Send Emails
            foreach (var email in form.Emails)
            {
               
                var mm = new MailMessage
                {
                    Body = EmailRenderer.Render(email.Template, instance,form,email, CurrentPage),
                    IsBodyHtml = true,
                    Subject = email.Subject??"New " + form.Name + " entry",
                    From = new MailAddress(email.From)

                };

                mm.To.Add(email.ToProperty != string.Empty ? new MailAddress(type.GetProperty(email.ToProperty).GetValue(instance).ToString()) : new MailAddress(email.To));

                new SmtpClient().Send(mm);
            }

            //Do more stuff
            if (!string.IsNullOrEmpty(form.WebHookUrl))
            {
                var client = new WebClient
                {
                    Encoding = Encoding.UTF8
                };
                client.Headers[HttpRequestHeader.ContentType] = "application/json";

                try
                {
                    var response = client.UploadString(form.WebHookUrl, "POST", JsonConvert.SerializeObject(dict));
                }
               
                catch (Exception ex)
                {
                    //log
                }
            }

            //redir
            TempData["success"] = true;
            return RedirectToCurrentUmbracoPage();
        }

    }
}