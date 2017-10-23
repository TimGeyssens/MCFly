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
                from a in AppDomain.CurrentDomain.GetAssemblies().Where(x=>KnownAssemblyExclusionFilter.Any(f => x.FullName.StartsWith(f)) == false)
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

        public static string MapUIOMaticFieldAttributeToFrontEndView(UIOMatic.Attributes.UIOMaticFieldAttribute attri)
        {
            switch (attri.View)
            {
                case UIOMatic.Constants.FieldEditors.Textarea:
                    return "TextArea";
                    break;
                case UIOMatic.Constants.FieldEditors.Rte:
                    return "TextArea";
                    break;
                default:
                    return "TextBox";
            }
        }

        internal static readonly string[] KnownAssemblyExclusionFilter = new[]
               {
                    "Forloop.HtmlHelpers",
                    "WebActivatorEx",
                    "mscorlib,",
                    "System.",
                    "Antlr3.",
                    "Autofac.",
                    "Autofac,",
                    "Castle.",
                    "ClientDependency.",
                    "DataAnnotationsExtensions.",
                    "DataAnnotationsExtensions,",
                    "Dynamic,",
                    "HtmlDiff,",
                    "Iesi.Collections,",
                    "log4net,",
                    "Microsoft.",
                    "Newtonsoft.",
                    "NHibernate.",
                    "NHibernate,",
                    "NuGet.",
                    "RouteDebugger,",
                    "SqlCE4Umbraco,",
                    "umbraco.datalayer,",
                    "umbraco.interfaces,",
                    "umbraco.webservices",
                    "Lucene.",
                    "Examine,",
                    "Examine.",
                    "ServiceStack.",
                    "MySql.",
                    "HtmlAgilityPack.",
                    "TidyNet.",
                    "ICSharpCode.",
                    "CookComputing.",
                    "AutoMapper,",
                    "AutoMapper.",
                    "AzureDirectory,",
                    "itextsharp,",
                    "UrlRewritingNet.",
                    "HtmlAgilityPack,",
                    "MiniProfiler,",
                    "Moq,",
                    "nunit.framework,",
                    "TidyNet,",
                    "WebDriver,"
                };
    }
}