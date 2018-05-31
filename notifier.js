var interval;
var observer = function() {
  var mainContent = document.getElementById('maincontent');
  if (!mainContent) {
    return;
  }
  console.log("found content");
  clearInterval(interval);

  let notif = "NOTIFICATION";

  var lobby = document.getElementsByClassName('lobby')[0];

  var x = new MutationObserver(function (e) {
    if (e.length &&
      e[0].removedNodes.length &&
      e[0].removedNodes[0].classList.contains('lobby')) {
      alert("notify");
      // notify();
    }
  });

  x.observe(mainContent, { childList: true });
};

function notify() {
  chrome.notifications.create(notif, {
    // TODO add sound?
    "type": "basic",
    "title": "Notif",
    "message": "Message"
  });

  chrome.browserAction.onClicked.addListener(() => {
    let clearing = chrome.notifications.clear(notif);
    clearing.then(() => {
      console.log("cleared notif");
    });
  });
}

interval = setInterval(observer, 300);
