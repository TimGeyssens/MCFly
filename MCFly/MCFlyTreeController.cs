using System;
using System.Linq;
using UIOMatic.Extensions;
using UIOMatic.Services;
using UIOMatic.Attributes;
using UIOMatic.Enums;
using UIOMatic.Interfaces;
using Umbraco.Core;
using Umbraco.Core.Services;
using Umbraco.Web.Models.Trees;
using Umbraco.Web.Mvc;
using Umbraco.Web.Trees;
using Umbraco.Web.WebApi.Filters;
using System.Net.Http.Formatting;
using Umbraco.Web.Models.ContentEditing;
using System.Collections.Generic;
using CoreConstants = Umbraco.Core.Constants;
using Umbraco.Web.Actions;
using MCFly.Controllers;

namespace MCFly
{
    [UmbracoTreeAuthorize("mcfly")]
    [Tree("MCFly", "mcfly", TreeTitle = "MCFly", SortOrder = 1)]
    [PluginController("MCFly")]
    public class MCFlyTreeController : TreeController
    {
        protected override Umbraco.Web.Models.Trees.MenuItemCollection GetMenuForNode(string id, System.Net.Http.Formatting.FormDataCollection queryStrings)
        {
            var menu = new MenuItemCollection();

            if (id == Constants.System.Root.ToInvariantString())
            {
                // root actions              
                menu.Items.Add(new RefreshNode("Refresh", true));
                menu.Items.Add<ActionNew>("Create");
            }
            else
            {
                menu.Items.Add<ActionDelete>("Delete");

            }
            return menu;
        }

        protected override Umbraco.Web.Models.Trees.TreeNodeCollection GetTreeNodes(string id, System.Net.Http.Formatting.FormDataCollection queryStrings)
        {
            //check if we're rendering the root node's children
            if (id == Constants.System.Root.ToInvariantString())
            {
                var ctrl = new MCFlyApiController();
                var nodes = new TreeNodeCollection();

                foreach (var form    in ctrl.GetAll())
                {
                    var node = CreateTreeNode(
                        form.Id.ToString(),
                        "-1",
                        queryStrings,
                        form.Name,
                        "icon-plane",
                        false);

                    nodes.Add(node);

                }
                return nodes;
            }

            //this tree doesn't suport rendering more than 1 level
            throw new NotSupportedException();
        }
    }
}