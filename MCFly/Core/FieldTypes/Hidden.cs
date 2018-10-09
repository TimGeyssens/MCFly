using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class Hidden : FieldType
    {
        public Hidden()
        {
            HideCaption = true;
            SupportsPlaceholder = false;
        }
    }
}