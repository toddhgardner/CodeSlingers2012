using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Twitterizer;

namespace CodeSlingers.Controllers
{
    public class TwitterController : Controller
    {
		[OutputCache(Duration=600)]
        public JsonResult Index()
        {
			OAuthTokens tokens = new OAuthTokens();
			tokens.AccessToken = "948267493-vHd6rvvYXPC8FbRG2hawcCmi7P9kaUpCRUPibQhq";
			tokens.AccessTokenSecret = "tSHBIwINVxcTSW2E35gYU6PpZOSCVGMcMdq2O9vnBS8";
			tokens.ConsumerKey = "j9wouFSIcK1Wjfjy5iKpyg";
			tokens.ConsumerSecret = "GJGaaB5TuYRyhcSYzLQvHNBrZGXTvpFw0eE6vsoswY8";

			var options = new SearchOptions()
			{
				PageNumber = 1,
				NumberPerPage = 5
			};

			TwitterResponse<TwitterSearchResultCollection> searchResult = TwitterSearch.Search("goodtimesushi", options);

			return Json(searchResult.ResponseObject, JsonRequestBehavior.AllowGet);
        }

    }
}
