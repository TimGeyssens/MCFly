using System.Xml;
using Umbraco.Core.PackageActions;
using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;
using Umbraco.Core.Persistence.SqlSyntax;

namespace Migrations.Migrations._2._0._0
{

    public class AddSummaryDashboardToConfig : MigrationBase
    {
        private addDashboardSection _packageAction;
        private XmlNode _xml;

        public AddSummaryDashboardToConfig(IMigrationContext context)
            : base(context)
        {
            _packageAction = new addDashboardSection();


            var xml = @"<Action runat=""install"" alias=""addDashboardSection"" dashboardAlias=""MCFlySummaryDashboard"">
   <section>
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

        public override void Migrate()
        {
            _packageAction.Execute("mcfly", _xml);
        }
    }
}
