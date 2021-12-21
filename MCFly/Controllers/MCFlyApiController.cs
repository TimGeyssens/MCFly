using MCFly.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UIOMatic;
using UC = Umbraco.Core;
using Umbraco.Core.Persistence;
using Umbraco.Web;
using Umbraco.Web.Editors;
using Umbraco.Web.Mvc;
using NPoco;
using NPoco.Linq;
using NPoco.ArrayExtensions;
using Umbraco.Core;

namespace MCFly.Controllers
{
    [PluginController("MCFly")]
    public class MCFlyApiController : UmbracoAuthorizedJsonController
    {
        private Database db;
        public MCFlyApiController()
        {
            db = new Database(UC.Constants.System.UmbracoConnectionName);
        }
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
            return db.Fetch<Form>(query);
        }

        public Form GetById(int id)
        {

           
            var form = db.SingleById<Form>(id);

            form.Fields = db.Fetch<Field>().Where(x => x.FormId == id).OrderBy(x => x.SortOrder).ToList();
            foreach (var fld in form.Fields)
                fld.FieldOptions = db.Fetch<FieldOption>().Where(x => x.FieldId == fld.Id);
            form.Emails = db.Fetch<Core.Email>().Where(x => x.FormId == id).ToList();

            form.FieldsToDelete = new int[0];
            form.EmailsToDelete = new int[0];
            return form;

        }

        public Form GetByAlias(string alias)
        {
            

            var form = GetAll().FirstOrDefault(x => x.Alias == alias);

            if (form == null)
                return null;

            form.Fields = db.Fetch<Field>().Where(x => x.FormId == form.Id).ToList();
            foreach (var fld in form.Fields)
                fld.FieldOptions = db.Fetch<FieldOption>().Where(x => x.FieldId == fld.Id).ToList();

            form.Emails = db.Fetch<Core.Email>().Where<Core.Email>(x => x.FormId == form.Id).ToList();

            return form;

        }

        public Form PostSave(Form form)
        {
            var needsFlag = false;

            if (form.Id > 0)
                db.Update(form);
            else
                db.Save(form);

            int sortOrder = 0;
            foreach (var fld in form.Fields)
            {
                fld.SortOrder = sortOrder;
                fld.FormId = form.Id;

                if (fld.Id > 0)
                {
                    db.Update(fld);
                }
                else
                {
                    needsFlag = true;
                    db.Save(fld);
                }

                if (fld.FieldOptions != null)
                {
                    foreach (var option in fld.FieldOptions)
                    {
                        option.FieldId = fld.Id;

                        if (option.Id > 0)
                            db.Update(option);
                        else
                            db.Save(option);
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
                    db.Update(email);
                else
                    db.Save(email);

            }

            if (form.FieldsToDelete != null)
            {
                foreach (int id in form.FieldsToDelete)
                {
                    needsFlag = true;
                    db.Execute(new Sql("Delete From [MCFlyFields] Where [Id] = @0", id));

                }
            }
            if (form.EmailsToDelete != null)
            {
                foreach (int id in form.EmailsToDelete)
                {
                    db.Execute(new Sql("Delete From [MCFlyEmails] Where [Id] = @0", id));

                }
            }
            if (needsFlag)
            {
                db.Insert(new MCFly.Core.Flag
                {
                    FormId = form.Id
                });
            }

            var context = new HttpContextWrapper(HttpContext.Current);

            UmbracoApplication.Restart(context);

            return form;
        }

        public int DeleteById(int id)
        {
            
            db.Execute(new Sql("Delete From [MCFlyEMails] Where [FormId] = @0", id));
            db.Execute(new Sql("Delete From [MCFlyFields] Where [FormId] = @0", id));
            return db.Delete<Form>(id);
        }

        public object GetSafeAlias(string value)
        { 
            return new { value = value.ToSafeAlias() };
            
        }

      

    }
}