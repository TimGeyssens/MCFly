using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.FieldTypes
{
    public class TextArea: FieldType
    {

        public TextArea()
        {

            BackOfficeEditView = UIOMatic.Constants.FieldEditors.Textarea;
        }
    }
}