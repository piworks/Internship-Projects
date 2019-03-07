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
    public class ValuesController : ApiController
    {

        private IPersonRepository repository = new PersonRepository();
        public IHttpActionResult GetAll()
        {
            var parttime = repository.GetAll();

            return Ok(parttime);
        }



        //get name by selecting id
        [HttpGet]
        public IHttpActionResult Get(string id)
        {

            var parttime = repository.Get(id);
            
            return Ok(parttime);
        }

        //Get action methods of the previous section
        [AcceptVerbs("GET", "POST")]

        public IHttpActionResult Update([FromBody]PartTime parttime)
        {
            repository.Update(parttime);
            

            return Ok();
        }


        [AcceptVerbs("GET", "POST")]

        public IHttpActionResult Add([FromBody]PartTime parttime)
        {

            repository.Add(parttime);
            return Ok();
        }

       // [HttpPost, ActionName("Delete")]
       // [HttpDelete, Route("{id}")]

        [HttpDelete]
        [AcceptVerbs("GET", "POST")]
        [Route("api/Values/Delete/{id}")]
        public IHttpActionResult Delete(int id)
        {

             repository.Delete(id);


            return Ok();
        }





    }
}
