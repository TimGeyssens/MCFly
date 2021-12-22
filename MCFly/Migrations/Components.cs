using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Composing;
using Umbraco.Core.Migrations;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;
using Umbraco.Core.Logging;
using Umbraco.Core.Migrations.Upgrade;
using Umbraco.Core;
using Migrations.Migrations._2._0._0;

namespace MCFly.Migrations
{
    public class UpgradeComponentComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Append<UpgradeComponent>();
        }
    }

    public class UpgradeComponent : IComponent
    {
        private readonly IScopeProvider _scopeProvider;
        private readonly IMigrationBuilder _migrationBuilder;
        private readonly IKeyValueService _keyValueService;
        private readonly ILogger _logger;

        public UpgradeComponent(IScopeProvider scopeProvider, IMigrationBuilder migrationBuilder, IKeyValueService keyValueService, ILogger logger)
        {
            _scopeProvider = scopeProvider;
            _migrationBuilder = migrationBuilder;
            _keyValueService = keyValueService;
            _logger = logger;
        }
        public void Initialize()
        {

            var installplan = new MigrationPlan("MCFly");
            installplan.From(string.Empty)
                .To<AddAllowedSectionToAdmins>("installed");

            var upgraderping = new Upgrader(installplan);
            upgraderping.Execute(_scopeProvider, _migrationBuilder, _keyValueService, _logger);

            try
            {
                var contplan = new MigrationPlan("MCFly" + Guid.NewGuid());
                contplan.From(string.Empty)
                    .To<ContinuousReflection>(DateTime.Now.Ticks.ToString());

                var upgrader = new Upgrader(contplan);
                upgrader.Execute(_scopeProvider, _migrationBuilder, _keyValueService, _logger);
            }
            catch(Exception ex) {

                _logger.Error<UpgradeComponent>(ex);
            }


        }

        public void Terminate()
        {
        }
    }
}