let notif = "NOTIFICATION";

// https://stackoverflow.com/a/44670502/3321184
function respondToVisibility(element, callback) {
  var options = {
    root: document.documentElement
  };

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      callback(entry.intersectionRatio > 0);
    });
  }, options);

  observer.observe(element);
}

respondToVisibility(document.getElementsByClassName('lobby')[0], isVisible => {
  console.log(isVisible);
  if (isVisible) {
    notify();
  }
});

function notify() {
  browser.notifications.create(notif, {
    // TODO add sound?
    "type": "basic",
    "title": "Notif",
    "message": "Message"
  });

  browser.browserAction.onClicked.addListener(() => {
    let clearing = browser.notifications.clear(notif);
    clearing.then(() => {
      console.log("cleared notif");
    });
  });
}
