const Name:string = "Yogi";
let Age:number = 23;

function getWelcomeMessage(Name :string):string {

    return `Hello ${Name}, Welocome to our app`;
    
}

function getUserInfo(Name:string, Age?:number):string {

    if (Age != undefined) {
        return `your name is ${Name} and your age is ${Age}`;
    } else {
        return "Please enter valid age";
    }
    
}


function getSubscriptionStatus(Name:string, isSubscribed:boolean = false): string {
    if (isSubscribed = true) {
        return `${Name} has a valid subscription`;
    } else {
        return `${Name} has not subscribed`;
    }
}

function isEligibleforPremium(Age:number): boolean {
    return Age > 18;
}

const getAlertMessage = (Name:string):string => {
    return `Hey ${Name}, How are you doing?`;
}

const notificationService ={
    appName : "NotifyApp",
    sendNotification(Name : string): string {
        const send = () =>{
         return  `Hello ${Name}, welcome to ${this.appName}`;
        };
        return send();
    }
}


console.log(getWelcomeMessage("Yogi"));
console.log(getUserInfo("Yogi",23));
console.log(getSubscriptionStatus("Yogi",true));
console.log(getAlertMessage("Yogi"));
console.log(isEligibleforPremium(23));
console.log("app name :" ,notificationService.appName);
console.log("sending notificaation ", notificationService.sendNotification("Yogi"));






