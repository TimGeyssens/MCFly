using MCFly.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UIOMatic;
using UIOMatic.Attributes;
using Umbraco.Core;
using Umbraco.Core.Persistence;
using Umbraco.Web;
using Umbraco.Web.Editors;
using Umbraco.Web.Mvc;

namespace MCFly.Controllers
{
    [PluginController("MCFly")]
    public class MCFlyApiController : UmbracoAuthorizedJsonController
    {

        public object GetSummaryDashboardTypes()
        {
            return GetAll()
                .Select(x => new
                {
                    id = x.Id,
                    name = x.Name,
                    fieldCount = GetById(x.Id).Fields.Count(),
                    alias = x.Alias,
                    storesData = x.StoresData

                });
        }
        public dynamic GetFormBuilderData()
        {
            dynamic dyn = new System.Dynamic.ExpandoObject();
            dyn.FieldTypes = GetAllFieldTypes();
            dyn.EmailTemplates = GetAllEmailTemplates();
            return dyn;
        }
        public IEnumerable<string> GetAllEmailTemplates()
        {
            return EmailRenderer.GetAllEmailTemplates();
        }
        public IEnumerable<FieldType> GetAllFieldTypes()
        {
            return MCFly.Core.Helper.GetFieldTypes();
        }

        public IEnumerable<Form> GetAll()
        {
            var query = new Sql().Select("*").From("MCFlyForms");
            return DatabaseContext.Database.Fetch<Form>(query);
        }

        public Form GetById(int id)
        {

            var query = new Sql().Select("*").From("MCFlyForms").Where<Form>(x => x.Id == id);
            var form = DatabaseContext.Database.Fetch<Form>(query).FirstOrDefault();

            form.Fields = DatabaseContext.Database.Fetch<Field>(new Sql().Select("*").From("MCFlyFields").Where<Field>(x => x.FormId == id)).OrderBy(x => x.SortOrder).ToList();
            foreach (var fld in form.Fields)
                fld.FieldOptions = DatabaseContext.Database.Fetch<FieldOption>(new Sql().Select("*").From("MCFlyFieldOptions").Where<FieldOption>(x => x.FieldId == fld.Id));
            form.Emails = DatabaseContext.Database.Fetch<Core.Email>(new Sql().Select("*").From("MCFlyEMails").Where<Core.Email>(x => x.FormId == id));

            form.FieldsToDelete = new int[0];
            form.EmailsToDelete = new int[0];
            return form;

        }

        public Form GetByAlias(string alias)
        {
            

            var form = GetAll().FirstOrDefault(x => x.Alias == alias);

            if (form == null)
                return null;

            form.Fields = DatabaseContext.Database.Fetch<Field>(new Sql().Select("*").From("MCFlyFields").Where<Field>(x => x.FormId == form.Id));
            foreach (var fld in form.Fields)
                fld.FieldOptions = DatabaseContext.Database.Fetch<FieldOption>(new Sql().Select("*").From("MCFlyFieldOptions").Where<FieldOption>(x => x.FieldId == fld.Id));

            form.Emails = DatabaseContext.Database.Fetch<Core.Email>(new Sql().Select("*").From("MCFlyEMails").Where<Core.Email>(x => x.FormId == form.Id));

            return form;

        }

        public Form PostSave(Form form)
        {
            if (form.Id > 0)
                DatabaseContext.Database.Update(form);
            else
                DatabaseContext.Database.Save(form);

            int sortOrder = 0;
            foreach (var fld in form.Fields)
            {
                fld.SortOrder = sortOrder;
                fld.FormId = form.Id;

                if (fld.Id > 0)
                {
                    DatabaseContext.Database.Update(fld);
                }
                else
                {
                    DatabaseContext.Database.Save(fld);
                }

                if (fld.FieldOptions != null)
                {
                    foreach (var option in fld.FieldOptions)
                    {
                        option.FieldId = fld.Id;

                        if (option.Id > 0)
                            DatabaseContext.Database.Update(option);
                        else
                            DatabaseContext.Database.Save(option);
                    }
                }
                sortOrder++;

            }

            foreach (var email in form.Emails)
            {
                email.FormId = form.Id;

                if (email.To == null)
                    email.To = string.Empty;


                if (email.ToProperty == null)
                    email.ToProperty = string.Empty;

                if (email.Id > 0)
                    DatabaseContext.Database.Update(email);
                else
                    DatabaseContext.Database.Save(email);

            }

            foreach(int id in form.FieldsToDelete)
            {
                DatabaseContext.Database.Execute(new Sql("Delete From [MCFlyFields] Where [Id] = @0", id));

            }

            foreach (int id in form.EmailsToDelete)
            {
                DatabaseContext.Database.Execute(new Sql("Delete From [MCFlyEmails] Where [Id] = @0", id));

            }

            // check if we need to insert flag so the table get's recreated

            var ctx = ApplicationContext.DatabaseContext;
            ctx.Database.Insert(new MCFly.Core.Flag
            {
                FormId = form.Id
            });

            var context = new HttpContextWrapper(HttpContext.Current);
            ApplicationContext.Current.RestartApplicationPool(context);



            return form;
        }

        public int DeleteById(int id)
        {
            DatabaseContext.Database.Execute(new Sql("Delete From [MCFlyEMails] Where [FormId] = @0", id));
            DatabaseContext.Database.Execute(new Sql("Delete From [MCFlyFields] Where [FormId] = @0", id));
            return DatabaseContext.Database.Delete<Form>(id);
        }

        public object GetSafeAlias(string value)
        { 
            return new { value = value.ToSafeAlias() };
            
        }

    }
}