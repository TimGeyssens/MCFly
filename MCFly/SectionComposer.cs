using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Composing;
using Umbraco.Core.Models.Sections;
using Umbraco.Web;

namespace MCFly
{
    public class SectionComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Sections().Append<MCFlySection>();
        }
    }

    public class MCFlySection : ISection
    {
        public string Alias => "MCFly";

        public string Name => "MCFly";

    }

  
}