using MCFly.Controllers;
using MCFly.Core.FieldTypes;
using Semver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;
using UIOMatic.Attributes;
using Umbraco.Core;
using Umbraco.Core.Logging;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.Migrations;
using Umbraco.Web;

namespace MCFly.Core
{
    public class Events: ApplicationEventHandler
    {

        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            //MyTypeBuilder.BuildingCustomValidationAttributes += MyTypeBuilder_Building;
            var targetDbVersion = new SemVersion(1, 0, 0); // Update this whenever a migration change is made
            var currentDbVersion = new SemVersion(0, 0, 0);

            var migrations = ApplicationContext.Current.Services.MigrationEntryService.GetAll("MCFly");
            var latestMigration = migrations.OrderByDescending(x => x.Version).FirstOrDefault();

            if (latestMigration != null)
                currentDbVersion = latestMigration.Version;

            if (targetDbVersion == currentDbVersion)
                return;

            var migrationsRunner = new MigrationRunner(
              ApplicationContext.Current.Services.MigrationEntryService,
              ApplicationContext.Current.ProfilingLogger.Logger,
              currentDbVersion,
              targetDbVersion,
              "MCFly");

            try
            {
                migrationsRunner.Execute(UmbracoContext.Current.Application.DatabaseContext.Database);
            }
            catch (Exception e)
            {
                LogHelper.Error<Events>("Error running MCFly migrations", e);
            }


            MCFly.Core.Helper.EnsureMCFlyFieldTypes();

            var ctx = applicationContext.DatabaseContext;
            var db = new DatabaseSchemaHelper(ctx.Database, applicationContext.ProfilingLogger.Logger, ctx.SqlSyntax);

            if (!db.TableExist("MCFlyForms"))
                db.CreateTable<Form>(true);
            
            if (!db.TableExist("MCFlyFields"))
                db.CreateTable<Field>(true);

            if (!db.TableExist("MCFlyFieldOptions"))
                db.CreateTable<MCFly.Core.FieldOption>(true);

            if (!db.TableExist("MCFlyEmails"))
                db.CreateTable<MCFly.Core.Email>(true);

            

            if (!db.TableExist("MCFlyFlags"))
                db.CreateTable<MCFly.Core.Flag>(true);

            var ctrl = new MCFlyApiController();

            foreach (var form in ctrl.GetAll())
            {
                var completeForm = ctrl.GetById(form.Id);
                Type type = MyTypeBuilder.CreateNewObject(completeForm);


                var flagExist = ctx.Database.Fetch<MCFly.Core.Flag>(new Sql().Select("*").From("MCFlyFlags").Where<MCFly.Core.Flag>(x => x.FormId == form.Id)).Any();

               if (!db.TableExist(completeForm.Alias) || flagExist)
                {
                    db.CreateTable(true, type);
                    
                    ctx.Database.Execute(new Sql("Delete From [MCFlyFlags] Where [FormId] = @0", form.Id));
                }

            }

        }

        //private void MyTypeBuilder_Building(object sender, BuildCustomValidationAttributesEventArgs e)
        //{
        //    if (e.FieldType == typeof(Upload))
        //    {
        //        //var ctor = typeof(RemoteAttribute).GetConstructor(new Type[] { typeof(string), typeof(string) });
        //        //e.PropertyBuilder.SetCustomAttribute(new CustomAttributeBuilder(ctor, new object[] { "CheckExistingEmail", "Entries" }));
        //    }
        //}
    }
}