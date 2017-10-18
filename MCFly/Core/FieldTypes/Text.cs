using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.FieldTypes
{
    public class Text: FieldType
    {
        public Text()
        {
            BackOfficeEditView = UIOMatic.Constants.FieldEditors.Rte;
            StoresData = false;
            HideCaption = true;
            SupportsPlaceholder = false;
        }
    }
}