console.log("content script is running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, send) {
    console.log(message.txt);

    let paragraph = document.getElementsByTagName('p');
    for(elt of paragraph)
    {
        elt.innerHTML = message.txt;
    }
    
}
