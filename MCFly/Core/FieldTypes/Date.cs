using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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