chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == 'tweet') {
        $.post( 'http://validate.jsontest.com/?json=' + JSON.stringify(request) , function( data ) {
            
        }).done(function(data) {
            sendResponse({"success": "true", "data": data});
        }).fail(function() {
            sendResponse({});
        });
        return true;
    }
  })