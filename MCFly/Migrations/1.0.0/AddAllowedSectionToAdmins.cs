using System.Linq;
using Umbraco.Core;
using Umbraco.Core.Logging;
using Umbraco.Core.Persistence.Migrations;
using Umbraco.Core.Persistence.SqlSyntax;


namespace Migrations.Migrations._1._0._0
{
    [Migration("1.0.0", 0, "MCFly")]
    public class AddAllowedSectionToAdmins : MigrationBase
    {
        public AddAllowedSectionToAdmins(ISqlSyntaxProvider sqlSyntax, ILogger logger)
            : base(sqlSyntax, logger)
        { }

        public override void Up()
        {
            int i;
            var users = ApplicationContext.Current.Services.UserService.GetAll(0, 100, out i)
                .Where(x => x.UserType.Alias == "admin");

            foreach (var user in users.Where(user => user.AllowedSections.Contains("MCFly") == false))
            {
                user.AddAllowedSection("MCFly");
                ApplicationContext.Current.Services.UserService.Save(user);
            }
        }

        public override void Down()
        {
            int i;
            var users = ApplicationContext.Current.Services.UserService.GetAll(0, 100, out i)
                .Where(x => x.UserType.Alias == "admin");

            foreach (var user in users.Where(user => user.AllowedSections.Contains("MCFly") == false))
            {
                user.RemoveAllowedSection("MCFly");
                ApplicationContext.Current.Services.UserService.Save(user);
            }
        }
    }
}
