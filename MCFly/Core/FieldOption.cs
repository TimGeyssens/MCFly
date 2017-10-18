using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace MCFly.Core
{
    [TableName("MCFlyFieldOptions")]
    [PrimaryKey("Id", autoIncrement = true)]
    [ExplicitColumns]
    [DataContract(Name = "fieldOption", Namespace = "")]
    public class FieldOption
    {
        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [Column("FormId")]
        [ForeignKey(typeof(Field))]
        public int FieldId { get; set; }

        [Column("Value")]
        [DataMember(Name = "value")]
        public string Value { get; set; }
    }
}