using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;

namespace MCFly
{
    public class BuildCustomValidationAttributesEventArgs : EventArgs
    {
        public BuildCustomValidationAttributesEventArgs(string objectTypeAlias, Type fieldType, string fieldName, PropertyBuilder propertyBuilder)
        {
            ObjectTypeAlias = objectTypeAlias;
            FieldType = fieldType;
            FieldName = fieldName;
            PropertyBuilder = propertyBuilder;
        }

        public string ObjectTypeAlias { get; set; }

        public Type FieldType { get; set; }

        public string FieldName { get; set; }

        public PropertyBuilder PropertyBuilder { get; set; }
    }
}