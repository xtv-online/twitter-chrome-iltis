chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == 'tweet') {
        $.get( 'http://echo.jsontest.com/tweet-id/' + request['twitter-post-id'] + '/', function( data ) {
            
        }).done(function(data) {
            sendResponse({"success": "true", "data": data});
        }).fail(function() {
            sendResponse({})
        })
        return true
    }
  })