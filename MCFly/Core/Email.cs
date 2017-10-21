using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace MCFly.Core
{
    [TableName("MCFlyEmails")]
    [PrimaryKey("Id", autoIncrement = true)]
    [ExplicitColumns]
    [DataContract(Name = "email", Namespace = "")]
    public class Email
    {
        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [Column("FormId")]
        [ForeignKey(typeof(Form))]
        public int FormId { get; set; }

        [Column("Subject")]
        [DataMember(Name = "subject")]
        public string Subject { get; set; }

        [Column("Content")]
        [DataMember(Name = "content")]
        public string Content { get; set; }

        [Column("From")]
        [DataMember(Name = "from")]
        public string From { get; set; }

        [Column("To")]
        [DataMember(Name = "to")]
        public string To { get; set; }

        [Column("ToProperty")]
        [DataMember(Name = "toProperty")]
        public string ToProperty { get; set; }

        [Column("Template")]
        [DataMember(Name = "template")]
        public string Template { get; set; }

    }
}