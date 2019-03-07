using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Parttime.Models
{
    public class EventContext : DbContext
    {
        // GET: EventContext
        public DbSet<Event> Event { get; set; }
    }
}