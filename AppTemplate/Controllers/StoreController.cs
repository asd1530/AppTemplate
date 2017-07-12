using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AppTemplate.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppTemplate.Controllers
{
    [Route("api/[controller]")]
    public class StoreController : Controller
    {
        // GET: api/values
        [HttpGet]
        [Authorize("list:storeItems")]
        public IList<Item> Get()
        {
            Item item1 = new Item()
            {
                Id = 0,
                Description = "www",
                Name = "qqq"
            };

            Item item2 = new Item()
            {
                Id = 1,
                Description = "xxx",
                Name = "bbb"
            };
            var list = new List<Item>()
             {
                 item1, item2
             };
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
