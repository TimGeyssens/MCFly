
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace MCFly.Core
{
    [TableName("MCFlyForms")]
    [PrimaryKey("Id", autoIncrement = true)]
    [ExplicitColumns]
    [DataContract(Name = "form", Namespace = "")]
    public class Form
    {

        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [Column("Name")]
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [Column("Alias")]
        [DataMember(Name = "alias")]
        public string Alias { get; set; }

        [Ignore]
        [DataMember(Name = "fields")]
        public IList<Field> Fields { get; set; }

        [Column("RequiredErrorMessage")]
        [DataMember(Name = "requiredErrorMessage")]
        public string RequiredErrorMessage { get; set; }

        [Column("InvalidErrorMessage")]
        [DataMember(Name = "invalidErrorMessage")]
        public string InvalidErrorMessage { get; set; }

        [Column("SubmitButtonCaption")]
        [DataMember(Name = "submitButtonCaption")]
        public string SubmitButtonCaption { get; set; }

        [Column("MessageOnSubmit")]
        [DataMember(Name = "messageOnSubmit")]
        public string MessageOnSubmit { get; set; }

        [Column("GoToPageOnSubmit")]
        [DataMember(Name = "goToPageOnSubmit")]
        [NullSetting(NullSetting =NullSettings.Null)]
        public int GoToPageOnSubmit { get; set; }

        [Column("StoresData")]
        [DataMember(Name = "storesData")]
        public bool StoresData { get; set; }

        [Column("WebHookUrl")]
        [DataMember(Name="webHookUrl")]
        public string WebHookUrl { get; set; }

        [Ignore]
        [DataMember(Name = "emails")]
        public IList<Core.Email> Emails { get; set; }

    }
}
