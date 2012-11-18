using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Twitterizer;
using CodeSlingers.Models;
using RestSharp;

namespace CodeSlingers.Controllers
{
    public class TwitterController : Controller
    {
        public JsonResult Old_Index()
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

		[OutputCache(Duration = 600)]
		public JsonResult Index()
		{
			var tweets = this.GetTweets();
			return Json(tweets, JsonRequestBehavior.AllowGet);
		}

		private IList<Tweet> GetTweets()
		{
			var restClient = new RestClient();
			string searchUrl = string.Format("http://search.twitter.com/search.json?q=goodtimesushi");

			var restRequest = new RestRequest(searchUrl, Method.GET);
			restRequest.RequestFormat = DataFormat.Json;

			var response = restClient.Execute<TweetsWrapper>(restRequest);
			if (response.ErrorException != null)
			{
				throw response.ErrorException;
			}

			return response.Data.Results;
		}

    }
}
