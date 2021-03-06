﻿using CODECorp.WcfIdentity.DataContract.Views.Claim;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace CODECorp.WcfIdentity.DataContract.Views.ClaimIdentity
{
    [DataContract]
    public class ClaimIdentityView
    {
        public ClaimIdentityView()
        {
            this.ClaimViewList = new List<ClaimView>();
        }

        [DataMember]
        public Guid UserId { get; set; }

        [DataMember]
        public AuthenticationTypeEnum AuthenticationType { get; set; }

        [DataMember]
        public IList<ClaimView> ClaimViewList { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string NameClaimType { get; set; }

        [DataMember]
        public string RoleClaimType { get; set; }
    }
}
