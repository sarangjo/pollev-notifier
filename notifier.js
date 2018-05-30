let notif = "NOTIFICATION";

browser.alarms.create("", {periodInMinutes: 0.1});

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(notif, {
    // TODO add sound?
    "type": "basic",
    "title": "Notif",
    "message": "Message"
  });
});

browser.browserAction.onClicked.addListener(() => {
  let clearing = browser.notifications.clear(notif);
  clearing.then(() => {
    console.log("cleared notif");
  });
});
