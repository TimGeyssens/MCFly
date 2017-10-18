using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace MCFly.Core
{
    [TableName("MCFlyFlags")]
    [PrimaryKey("Id", autoIncrement = true)]
    [ExplicitColumns]
    [DataContract(Name = "flag", Namespace = "")]
    public class Flag
    {
        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [Column("FormId")]
        [ForeignKey(typeof(Form))]
        public int FormId { get; set; }
    }
}