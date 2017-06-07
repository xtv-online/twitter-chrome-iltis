chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type == 'tweet') {
            var screenName = request.user.screenName;
            var tweetId = request.tweet_id;
            $.post('http://iltis-twitter.eu-west-1.elasticbeanstalk.com/shortlist/' + tweetId + '?screenName=' + screenName, function (data) {

            }).done(function (data) {
                sendResponse({
                    "success": "true",
                    "data": data
                });
            }).fail(function () {
                sendResponse({
                    "success": "false"
                });
            });
            return true;
        }
    })
