using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeSlingers.Models
{
    public class Job
    {
        public string Id { get; set; }
        public string Email { get; set; } 
        public string Name { get; set; } 
        public string PhoneNumber { get; set; } 
        public string About { get; set; }
        public string Resident { get; set; }
        public string Selection { get; set; }
    }
}