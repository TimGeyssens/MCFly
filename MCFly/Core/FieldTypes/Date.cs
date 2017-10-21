using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;

namespace MCFly.Core.FieldTypes
{
    public class Date: FieldType
    {
        public Date()
        {
           
         
            BackOfficeEditView = UIOMatic.Constants.FieldEditors.Date;
            PropertyType = typeof(System.DateTime);
        }
        public override object Process(Form form, Field field, object value, ControllerContext controllerContext)
        {
            if (value == null || value == string.Empty)
                return null;
            return Convert.ChangeType(value, field.FieldType.PropertyType);
        }
        public override IEnumerable<string> RequiredJSFiles()
        {
            return "/App_Plugins/MCFly/assets/datepicker.min.js".AsEnumerableOfOne();
        }

        public override IEnumerable<string> RequiredCssFiles()
        {
            return "/App_Plugins/MCFly/assets/datepicker.min.css".AsEnumerableOfOne();
        }
       
    }
}