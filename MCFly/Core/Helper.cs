using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core;

namespace MCFly.Core
{
    public class Helper
    {
        public static FieldType GetFieldType(string name)
        {
            return GetFieldTypes().FirstOrDefault(x => x.Name == name);
        }
        public static IEnumerable<FieldType> GetFieldTypes()
        {
            return (IEnumerable<FieldType>)HttpRuntime.Cache["MCFlyFieldTypes"] ?? EnsureMCFlyFieldTypes();
        }

        public static IEnumerable<FieldType> EnsureMCFlyFieldTypes()
        {
           

            var fieldTypes =
                from a in AppDomain.CurrentDomain.GetAssemblies()
                from t in a.GetTypes()
                where t.IsSubclassOf(typeof(FieldType)) && !t.IsAbstract && t.IsClass
                select (FieldType)Activator.CreateInstance(t); 
            // Ensure unique names
            var names = new List<string>();
            foreach (var t in fieldTypes)
            {
                if (names.Any(x => x == t.Name))
                    throw new ApplicationException("Multiple MCFly fieldtypes found with name '" + t.Name + "'. Please ensure all types have a unique name value.");

                names.Add(t.Name);
            }

            HttpRuntime.Cache.Insert("MCFlyFieldTypes", fieldTypes.OrderBy(x=>x.Name));
            return fieldTypes.OrderBy(x => x.Name);
        }
    }
}