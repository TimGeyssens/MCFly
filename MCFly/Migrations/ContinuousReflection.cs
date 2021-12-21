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

            
            if (!this.TableExists("MCFlyForms"))
            {
                Create.Table<Form>().Do();
            }

            if (!this.TableExists("MCFlyFields"))
            {
                Create.Table<Field>().Do();
            }

            if (!this.TableExists("MCFlyFieldOptions"))
            {
                Create.Table<FieldOption>().Do();
            }

            if (!this.TableExists("MCFlyEmails"))
            {
                Create.Table<Email>().Do();
            }

            if (!this.TableExists("MCFlyFlags"))
            {
                Create.Table<Flag>().Do();
            }

            using (var scope = this.scopeProvider.CreateScope(autoComplete: true))
            {

                var db = scope.Database;
               

                var ctrl = new MCFlyApiController();

                foreach (var form in ctrl.GetAll())
                {
                    var completeForm = ctrl.GetById(form.Id);
                    Type type = MyTypeBuilder.CreateNewObject(completeForm);


                    var flagExist = db.Fetch<MCFly.Core.Flag>().Where(x => x.FormId == form.Id).Any();

                    if (!this.TableExists(completeForm.Alias) || flagExist)
                    {
                        MethodInfo method = typeof(MigrationBase).GetMethod("Table");
                        MethodInfo generic = method.MakeGenericMethod(type);
                        generic.Invoke(this, null);

                        db.Execute(new Sql("Delete From [MCFlyFlags] Where [FormId] = @0", form.Id));
                    }

                }

            }
            

        }
    }
}