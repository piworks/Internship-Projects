using Parttime.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parttime.Repository
{
    public interface IPersonRepository
    {

        IEnumerable<PartTime> GetAll();
        PartTime Get(string id);
        void Add(PartTime parttime);
        void Delete(int id);
        void Update(PartTime parttime);
    }
}
