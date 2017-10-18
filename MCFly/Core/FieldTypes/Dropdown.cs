using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class Dropdown : FieldType
    {
        public Dropdown()
        {

            SupportsOptions = true;
            SupportsPlaceholder = false;
        }
    }
}