using DataAnnotationsExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class URL : FieldType
    {
        public URL()
        {

            BackOfficeListView = "~/App_Plugins/MCFly/UIOMaticAddons/ListViewFields/URL.html";
            
        }

        public override IEnumerable<CustomAttributeBuilder> ValidationAttributes(Form form, Field field)
        {
            
            var attributes = new List<CustomAttributeBuilder>();

            var ctor = typeof(UrlAttribute).GetConstructor(new Type[] { typeof(UrlOptions) });
            attributes.Add(new CustomAttributeBuilder(ctor, new object[] { UrlOptions.RequireProtocol},
                         new[] {
                typeof(UrlAttribute).GetProperty("ErrorMessage"),

                },
                new object[] {
                string.Format(form.InvalidErrorMessage, field.Caption)

                }));

            return attributes;


        }
    }
}