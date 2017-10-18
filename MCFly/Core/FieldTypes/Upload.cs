using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;

namespace MCFly.Core.FieldTypes
{
    public class Upload : FieldType
    {
        public Upload()
        {

            BackOfficeEditView = UIOMatic.Constants.FieldEditors.File;
            BackOfficeListView = "~/App_Plugins/MCFly/UIOMaticAddons/ListViewFields/file.html";
            SupportsPlaceholder = false;
        }

        public override object Process(Form form, Field field, object value, ControllerContext controllerContext)
        {
            var files = controllerContext.HttpContext.Request.Files;

            var file = files[field.Alias];

            if (file != null && file.ContentLength > 0)
            { 
                var guid = Guid.NewGuid();
                var path = "~/App_Plugins/MCFly/uploads/"+ guid.ToString() + "/";
                System.IO.Directory.CreateDirectory(Umbraco.Core.IO.IOHelper.MapPath(path));

                file.SaveAs(Umbraco.Core.IO.IOHelper.MapPath(path) + file.FileName);
              

                return "/App_Plugins/MCFly/uploads/" + guid.ToString() + "/" + file.FileName;
            }

            return string.Empty;
        }
    }
}