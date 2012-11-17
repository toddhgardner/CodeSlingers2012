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
				createdDate: new Date(tweetData.CreatedDate),
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
		var selector = "#connect .bubble." + tweetIndex;
		$(selector + " .text").text(tweet.text);
		$(selector + " .timestamp").text(tweet.createdDate.toString());
	}

	_initializeConnect();
});