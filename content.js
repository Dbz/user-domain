// chrome.webRequest.onCompleted.addListener(function(details) {
//   if(details.type == "xmlhttprequest")
//     console.log(details);
// }, {urls: ["*://mail.google.com/*"]})

// $('div[role="main"]').on('')

var j = document.createElement('script');
j.src = chrome.extension.getURL('jquery-2.1.3.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('gmail.js');
(document.head || document.documentElement).appendChild(g);

var s = document.createElement('script');
s.src = chrome.extension.getURL('main.js');
(document.head || document.documentElement).appendChild(s);