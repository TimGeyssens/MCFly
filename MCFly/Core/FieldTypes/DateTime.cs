using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class DateTime: FieldType
    {
        public DateTime()
        {
           
         
            BackOfficeEditView = UIOMatic.Constants.FieldEditors.DateTime;
            PropertyType = typeof(System.DateTime);
        }
    }
}