"use strict";
const Name = "Yogi";
let Age = 23;
function getWelcomeMessage(Name) {
    return `Hello ${Name}, Welocome to our app`;
}
function getUserInfo(Name, Age) {
    if (Age != undefined) {
        return `your name is ${Name} and your age is ${Age}`;
    }
    else {
        return "Please enter valid age";
    }
}
function getSubscriptionStatus(Name, isSubscribed = false) {
    if (isSubscribed = true) {
        return `${Name} has a valid subscription`;
    }
    else {
        return `${Name} has not subscribed`;
    }
}
function isEligibleforPremium(Age) {
    return Age > 18;
}
const getAlertMessage = (Name) => {
    return `Hey ${Name}, How are you doing?`;
};
const notificationService = {
    appName: "NotifyApp",
    sendNotification(Name) {
        const send = () => {
            return `Hello ${Name}, welcome to ${this.appName}`;
        };
        return send();
    }
};
console.log(getWelcomeMessage("Yogi"));
console.log(getUserInfo("Yogi", 23));
console.log(getSubscriptionStatus("Yogi", true));
console.log(getAlertMessage("Yogi"));
console.log(isEligibleforPremium(23));
console.log("app name :", notificationService.appName);
console.log("sending notificaation ", notificationService.sendNotification("Yogi"));
