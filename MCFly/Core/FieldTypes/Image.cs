using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class Image: FieldType
    {
        public Image()
        {

            BackOfficeEditView = UIOMatic.Constants.FieldEditors.File;
            StoresData = false;
            HideCaption = true;
            SupportsPlaceholder = false;
        }
    }
}