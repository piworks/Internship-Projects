using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Parttime.Models
{
    public class Event 
    {
        public int EventID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        [JsonProperty(PropertyName ="start")]
        public DateTime StartAt { get; set; }

        [JsonProperty(PropertyName = "end")]
        public DateTime EndAt { get; set; }
        public Boolean IsFullDay { get; set; }
        public int ParttimeId { get; set; }
        public string Work { get; set; }



    }
}