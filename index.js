addSendToXTV()
setInterval(addSendToXTV, 500);
addDelegateSendToXTVClickListeners()

function addSendToXTV() {
    var to_add =   `<div class="ProfileTweet-action ProfileTweet-action--reply send-to-xtv" style="float: right; margin-right: 10px; margin-top: 3px;">
                        <button class="ProfileTweet-actionButton js-actionButton send-to-xtv-button" type="button">
                            <div class="IconTextContainer">
                                <span class="ProfileTweet-actionCount">
                                    <span class="ProfileTweet-actionCountForPresentation send-to-xtv-text" aria-hidden="true">Send to XTV</span>
                                </span>
                            </div>
                        </button>
                    </div>`;
    
    $('.ProfileTweet-actionList.js-actions').each(function(index) {
        if ($(this).find('.send-to-xtv').length == 0) {
            $(this).append(to_add)
        }
    })
}

function addDelegateSendToXTVClickListeners() {
    document.querySelector('#page-container').addEventListener('click', function(e) {
        if (e.target.matches('.send-to-xtv-text')) {
            onClickSendToXTV($(e.target))
        }
    }, true);
}

function getTweetId(element) {
    return $(element).closest('.tweet').attr('data-tweet-id')
}

function onClickSendToXTV(button) {
    if($(button).text() == 'Done!') {
        alert("Tweet Already Submitted")
    } else {
        tweet_id = getTweetId(button)

        chrome.runtime.sendMessage({'type': 'tweet', 'twitter-post-id': tweet_id}, function(response) {
            console.log(response)
            if (response.success) {
                $(button).text('Done!')
            }
        });
    }  
}
