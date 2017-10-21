using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Emit;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;

namespace MCFly
{
    public abstract class FieldType : IFieldType
    {


        private string frontEndRenderView;

        public virtual string FrontEndRenderView
        {
            get { return frontEndRenderView??Name; }
            set { frontEndRenderView = value; }
        }

        private string backOfficeEditView = UIOMatic.Constants.FieldEditors.Textfield;

        public virtual string BackOfficeEditView
        {
            get { return backOfficeEditView; }
            set { backOfficeEditView = value; }
        }

        private string backOfficeListView = UIOMatic.Constants.FieldViews.Label;

        public virtual string BackOfficeListView
        {
            get { return backOfficeListView; }
            set { backOfficeListView = value; }
        }


        private string emailRenderView = "Text";

        public virtual string EmailRenderView
        {
            get { return emailRenderView; }
            set { emailRenderView = value; }
        }

        private bool supportsOptions = false;

        public virtual bool SupportsOptions
        {
            get { return supportsOptions; }
            set { supportsOptions = value; }
        }

        private bool supportsPlaceholder = true;

        public virtual bool SupportsPlaceholder
        {
            get { return supportsPlaceholder; }
            set { supportsPlaceholder = value; }
        }

        private bool storesData = true;

        public virtual bool StoresData
        {
            get { return storesData; }
            set { storesData = value; }
        }

        private bool hideCaption = false;

        public virtual bool HideCaption
        {
            get { return hideCaption; }
            set { hideCaption = value; }
        }
        private Type propertyType = typeof(string);

        public virtual Type PropertyType
        {
            get { return propertyType; }
            set { propertyType = value; }
        }

        private string name;
        public virtual string Name
        {
            get { return name??this.GetType().Name; }
            set { name = value; }
        }

        public virtual IEnumerable<CustomAttributeBuilder> ValidationAttributes(Form form, Field field)
        {

            return null;
        }

        public virtual object Process(Form form, Field field, object value, ControllerContext controllerContext)
        {
            if (value == null)
                return value;
            return Convert.ChangeType(value, field.FieldType.PropertyType);
        }
        public virtual IEnumerable<string> RequiredJSFiles()
        {
            return new string[0];
        }

        public virtual IEnumerable<string> RequiredCssFiles()
        {
            return new string[0];
        }

        public virtual string RequiredJSInitialization(string fieldId)
        {
            return string.Empty;
        }

       

    }
}
