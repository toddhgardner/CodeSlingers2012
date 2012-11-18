$(function () {
	var _twitterUrl = window.rootUrl + "twitter";

	var _initializeConnect = function () {
		_getTweets();
	};

	var _getTweets = function () {
		$.getJSON(_twitterUrl, _renderTweets);
	};

	var _renderTweets = function (data) {
		var allTweets = [];
		$.each(data, function (index, tweetData) {
			var tweet = {
				id: tweetData.Id_Str,
				createdDate: moment(tweetData.Created_At).fromNow(),
				text: tweetData.Text
			};

			allTweets.push(tweet);
		});

		_renderTweet("one", allTweets[0]);
		_renderTweet("two", allTweets[1]);
		_renderTweet("three", allTweets[2]);
		_renderTweet("four", allTweets[3]);
		_renderTweet("five", allTweets[4]);
	};

	var _renderTweet = function (tweetIndex, tweet) {
		var tweetUrl = "https://twitter.com/GoodTimeSushi/status/" + tweet.id;
		var selector = "#connect .bubble." + tweetIndex;

		$(selector + " .text").text(tweet.text).urlToLink();
		$(selector + " .timestamp").text("Posted " + tweet.createdDate);
		$(selector + " .bubble-inner").attr("href", tweetUrl);
	}

	$.fn.urlToLink = function () {
		return this.each(function () {
			var element = $(this),
                expression = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

			return element.html(element.text().replace(expression, "<a href='$1' class='twitter-link' target='_blank'>$1</a>"));
		});
	};

	_initializeConnect();
});