using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MCFly.FieldTypes
{
    public class CheckBox: FieldType
    {
        public CheckBox()
        {
            BackOfficeEditView = UIOMatic.Constants.FieldEditors.CheckBox;
            PropertyType = typeof(bool);
            SupportsPlaceholder = false;
        }

        public override object Process(Form form, Field field, object value, ControllerContext controllerContext)
        {
            if (value == null)
                return false;
            return true;
        }
    }
}