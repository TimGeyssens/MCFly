using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Migrations;

namespace MCFly.Migrations
{
    public class StubMigration : MigrationBase
    {
        public StubMigration(IMigrationContext context) : base(context)
        {

        }
        public override void Migrate()
        {
            throw new NotImplementedException();
        }
    }
}