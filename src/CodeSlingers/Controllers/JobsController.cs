using CodeSlingers.Models;
using RestSharp;
using RestSharp.Deserializers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace CodeSlingers.Controllers
{
    public class JobsController : Controller
    {
        //
        // POST: /Jobs/
        [HttpPost]
        public JsonResult Index(Job job)
        {
            var client = new RestClient("http://vermillion.howard.fusionroomdev.com");
            var request = new RestRequest("api/vermillion", Method.POST);
            request.RequestFormat = DataFormat.Json;
            request.AddBody(job);
            

            // execute the request
            var response = client.Execute<Job>(request);
            
            this.Response.StatusCode = (int) response.StatusCode;
            return this.Json(response.Data, JsonRequestBehavior.DenyGet);
        }
    }
}

