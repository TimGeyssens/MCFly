
using MCFly.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace MCFly.Core
{
    [TableName("MCFlyFields")]
    [PrimaryKey("Id", autoIncrement = true)]
    [ExplicitColumns]
    [DataContract(Name = "field", Namespace = "")]
    public class Field
    {
        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [Column("FormId")]
        [ForeignKey(typeof(Form))]
        public int FormId { get; set; }

        [Column("Caption")]
        [DataMember(Name = "caption")]
        public string Caption { get; set; }

        [Column("Alias")]
        [DataMember(Name = "alias")]
        public string Alias { get; set; }

        [Column("Placeholder")]
        [DataMember(Name = "placeholder")]
        public string Placeholder { get; set; }

        [Column("Required")]
        [DataMember(Name = "required")]
        public bool Required { get; set; }

        [Column("SortOrder")]
        [DataMember(Name = "sortorder")]
        public int SortOrder { get; set; }

        [Column("RegEx")]
        [DataMember(Name = "regEx")]
        public string RegEx { get; set; }

        [Ignore]
        [DataMember(Name = "options")]
        public IEnumerable<FieldOption> FieldOptions { get; set; }

        [Column("FieldTypeName")]
        [DataMember(Name = "fieldTypeName")]
        public string FieldTypeName { get; set; }

        [Ignore]
        public IFieldType FieldType
        {

            get
            {
                return Helper.GetFieldType(FieldTypeName);
            }
        }
    }
}
