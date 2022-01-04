using MCFly.Controllers;
using MCFly.Core;
using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Umbraco.Core.Migrations;
using Umbraco.Core.Scoping;

namespace MCFly.Migrations
{
    public class ContinuousReflection : MigrationBase
    {
        private readonly IScopeProvider scopeProvider;
        public ContinuousReflection(IMigrationContext context, IScopeProvider scopeProvider)
             : base(context)
        {
            this.scopeProvider = scopeProvider;
           
        }
        public override void Migrate()
        {
            MCFly.Core.Helper.EnsureMCFlyFieldTypes();

            if (!TableExists("MCFlyForms"))
            {
                Create.Table<Form>().Do();
            }

            if (!TableExists("MCFlyFields"))
            {
                Create.Table<Field>().Do();
            }

            if (!TableExists("MCFlyFieldOptions"))
            {
                Create.Table<FieldOption>().Do();
            }

            if (!TableExists("MCFlyEmails"))
            {
                Create.Table<Email>().Do();
            }

            if (!TableExists("MCFlyFlags"))
            {
                Create.Table<Flag>().Do();
            }

            if (TableExists("MCFlyForms")) {
                using (var scope = this.scopeProvider.CreateScope(autoComplete: true))
                {
                    var db = scope.Database;

                    var query = new Sql().Select("*").From("MCFlyForms");

                    var forms = db.Fetch<Form>(query);

                    if (forms != null && forms.Any())
                    {
                        foreach (var form in forms)
                        {
                            if (TableExists("MCFlyFields"))
                            {
                                form.Fields = db.Fetch<Field>().Where(x => x.FormId == form.Id).OrderBy(x => x.SortOrder).ToList();

                                if (TableExists("MCFlyFieldOptions"))
                                {
                                    foreach (var fld in form.Fields)
                                        fld.FieldOptions = db.Fetch<FieldOption>().Where(x => x.FieldId == fld.Id);
                                }
                            }
                            if (TableExists("MCFlyEmails"))
                            {
                                form.Emails = db.Fetch<Core.Email>().Where(x => x.FormId == form.Id).ToList();
                            }

                            form.FieldsToDelete = new int[0];
                            form.EmailsToDelete = new int[0];

                            Type type = MyTypeBuilder.CreateNewObject(form);

                            var flagExist = false;

                            if (TableExists("MCFlyFlags"))
                            {
                                flagExist = db.Fetch<MCFly.Core.Flag>().Where(x => x.FormId == form.Id).Any();
                            }

                            if (!this.TableExists(form.Alias) || flagExist)
                            {
                              
                                MethodInfo method = typeof(ContinuousReflection).GetMethod("Table");
                                MethodInfo generic = method.MakeGenericMethod(type);
                                var obj = generic.Invoke(this, null);

                                MethodInfo doMethod = typeof(ContinuousReflection).GetMethod("Do");
                                doMethod.Invoke(obj, null);

                                if (TableExists("MCFlyFlags"))
                                {
                                    db.Execute(new Sql("Delete From [MCFlyFlags] Where [FormId] = @0", form.Id));
                                }
                            }

                        }
                    }

                    scope.Complete();
                }

                

            }
            

        }
    }
}