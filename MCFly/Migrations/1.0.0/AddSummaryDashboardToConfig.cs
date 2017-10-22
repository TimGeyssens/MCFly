using System.Xml;
using umbraco.cms.businesslogic.packager.standardPackageActions;
using Umbraco.Core.Logging;
using Umbraco.Core.Persistence.Migrations;
using Umbraco.Core.Persistence.SqlSyntax;

namespace UIOMatic.Migrations._2._0._0
{
    [Migration("1.0.0", 1, "MCFly")]
    public class AddSummaryDashboardToConfig : MigrationBase
    {
        private addDashboardSection _packageAction;
        private XmlNode _xml;

        public AddSummaryDashboardToConfig(ISqlSyntaxProvider sqlSyntax, ILogger logger)
            : base(sqlSyntax, logger)
        {
            _packageAction = new addDashboardSection();

            var xml = @"<Action runat=""install"" alias=""addDashboardSection"" dashboardAlias=""MCFlySummaryDashboard"">
   <section alias='MCFlySection'>
    <areas>
      <area>MCFly</area>
    </areas>
    <tab caption='Summary'>
      <control>/App_Plugins/MCFly/backoffice/dashboard/summarydashboard.html</control>
    </tab>
  </section>
</Action>";

            var xdoc = new XmlDocument();
            xdoc.LoadXml(xml);

            _xml = xdoc.DocumentElement;
        }

        public override void Up()
        {
            _packageAction.Execute("MCFly", _xml);
        }

        public override void Down()
        {
            _packageAction.Undo("MCFly", _xml);
        }
    }
}
