using System.Linq;
using Umbraco.Core;
using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;
using Umbraco.Core.Persistence.SqlSyntax;
using Umbraco.Core.Services;
using Umbraco.Web;



namespace Migrations.Migrations._2._0._0
{
   
    public class AddAllowedSectionToAdmins : MigrationBase
    {
        private readonly IUserService _uService;

        public AddAllowedSectionToAdmins(IMigrationContext context, IUserService uService)
            : base(context)
        {
            _uService = uService;
        }

        public override void Migrate()
        {
            var userGroup = _uService.GetUserGroupByAlias("admin");
            if (userGroup != null)
            {
                userGroup.AddAllowedSection("MCFly");
                _uService.Save(userGroup);
            }


        }
    }
}
