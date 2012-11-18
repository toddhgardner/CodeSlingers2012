using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeSlingers.Models
{
	public class Tweet
	{
		public Tweet()
		{

		}

		public DateTime Created_At { get; set; }
		public string Id_Str { get; set; }
		public string Text { get; set; }

		//"id": 269785763930075140,
		//"id_str": "269785763930075137",
		//"text": "http://t.co/uA0bnHsh"
	}
}