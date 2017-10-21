using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MCFly
{
    public interface IFieldType
    {
        
        string Name { get; set; }
        string FrontEndRenderView { get; set; }
        string BackOfficeEditView { get; set; }
        string BackOfficeListView { get; set; }
        string EmailRenderView { get; set; }
        bool SupportsOptions { get; set; }
        bool HideCaption { get; set; }
        bool StoresData { get; set; }
        bool SupportsPlaceholder { get; set; }

        Type PropertyType { get; set; }

        IEnumerable<CustomAttributeBuilder> ValidationAttributes(Form form, Field field);

        object Process(Form form, Field field, object value, ControllerContext controllerContext);

        IEnumerable<string> RequiredJSFiles();
        IEnumerable<string> RequiredCssFiles();
        string RequiredJSInitialization(string fieldId);
    }
}
