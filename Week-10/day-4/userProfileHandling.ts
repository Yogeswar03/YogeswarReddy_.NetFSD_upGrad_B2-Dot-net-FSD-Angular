// variable declaration

const userName:string = "Yogi";
let age:number = 23;
let email:string = "yogi@gmail.com";
let IsSubscribed:boolean = true;


// type reference

let country = "India";
let pincode = 500083;


// operator

age++

let isEligible = age > 18 && IsSubscribed;

// template literals

const message = `Hey ${userName} , your age is ${age} and your email is ${email}. Your from ${country} and your pincode is ${pincode}.`

console.log("updated age is :",age);
console.log("is eligible for subs : ", isEligible);
console.log("Your message is :",message);


