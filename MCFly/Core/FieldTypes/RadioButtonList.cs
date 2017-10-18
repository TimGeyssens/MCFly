using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class RadioButtonList : FieldType
    {
        public RadioButtonList()
        {
            SupportsOptions = true;
            SupportsPlaceholder = false;
        }
    }
}