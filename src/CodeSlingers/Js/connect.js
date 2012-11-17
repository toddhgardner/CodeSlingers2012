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
				createdDate: moment(tweetData.CreatedDate).fromNow(),
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
		$(selector + " .text").text(tweet.text).urlToLink();
		$(selector + " .timestamp").text(tweet.createdDate.toString());
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