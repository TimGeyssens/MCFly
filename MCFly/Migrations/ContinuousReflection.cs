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
                            Type type = MyTypeBuilder.CreateNewObject(form);

                            var flagExist = db.Fetch<MCFly.Core.Flag>().Where(x => x.FormId == form.Id).Any();

                            if (!this.TableExists(form.Alias) || flagExist)
                            {
                                MethodInfo method = typeof(MigrationBase).GetMethod("Table");
                                MethodInfo generic = method.MakeGenericMethod(type);
                                generic.Invoke(this, null);

                                db.Execute(new Sql("Delete From [MCFlyFlags] Where [FormId] = @0", form.Id));

                            }

                        }
                    }

                    scope.Complete();
                }

                

            }
            

        }
    }
}