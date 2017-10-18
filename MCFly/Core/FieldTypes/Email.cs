using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;

namespace MCFly.Core.FieldTypes
{
    public class Email : FieldType
    {
        public Email()
        {
            BackOfficeListView = "~/App_Plugins/MCFly/UIOMaticAddons/ListViewFields/Email.html";

        }

        public override IEnumerable<CustomAttributeBuilder> ValidationAttributes(Form form, Field field)
        {
            var attributes = new List<CustomAttributeBuilder>();

            var ctor = typeof(EmailAddressAttribute).GetConstructor(new Type[] { });
            attributes.Add(new CustomAttributeBuilder(ctor, new object[] { },
                         new[] {
                typeof(EmailAddressAttribute).GetProperty("ErrorMessage"),

                },
                new object[] {
                string.Format(form.InvalidErrorMessage, field.Caption)

                }));

            //ctor =  typeof(RemoteAttribute).GetConstructor(new Type[] { typeof(string), typeof(string) });
            //attributes.Add(new CustomAttributeBuilder(ctor, new object[] { "CheckExistingEmail", "Entries" }));

            return attributes;
           

        }
    }
}