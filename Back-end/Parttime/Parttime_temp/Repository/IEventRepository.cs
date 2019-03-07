using Parttime.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Parttime.Repository
{
    public interface IEventRepository 
    {
        IEnumerable<Event> GetAll();

        void Add(Event events);

        IEnumerable<PartTime> GetPart();

        void Delete(int EventID);


    }
}