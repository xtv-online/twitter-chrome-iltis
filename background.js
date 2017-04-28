chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == 'tweet') {
        $.get( 'http://echo.jsontest.com/tweet-id/' + request['tweet_id'] + '/user-handle/' + request['user_handle'] , function( data ) {
            
        }).done(function(data) {
            sendResponse({"success": "true", "data": data});
        }).fail(function() {
            sendResponse({})
        })
        return true
    }
  })