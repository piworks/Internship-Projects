using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Parttime.Models
{
    public class ParttimeContext : DbContext
    { 
        /*public ParttimeContext() : base("name=ParttimeContext")
        {
        }*/

        public DbSet<PartTime> Parttime { get; set; }
    }
}
