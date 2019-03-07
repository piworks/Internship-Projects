using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Parttime.Models;
using Parttime.Repository;

namespace Parttime.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CalendarController : ApiController
    {
        private IEventRepository repository = new EventRepository();

        public IHttpActionResult GetAll()
        {
            var events = repository.GetAll();

            return Ok(events);
        }

        public IHttpActionResult GetPart()
        {
            var parttime = repository.GetAll();

            return Ok(parttime);
        }

        [HttpPost]
        [AcceptVerbs("GET", "POST")]
        [Route("api/Calendar/Add/")]
        public IHttpActionResult Add([FromBody]Event events)
        {

            repository.Add(events);
            return Ok();
        }

        [HttpDelete]
        [AcceptVerbs("GET", "POST")]
        [Route("api/Calendar/Delete/{id}")]
        public IHttpActionResult Delete(int id)
        {

            repository.Delete(id);


            return Ok();
        }
    }
}
