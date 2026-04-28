"use strict";
// variable declaration
const userName = "Yogi";
let age = 23;
let email = "yogi@gmail.com";
let IsSubscribed = true;
// type reference
let country = "India";
let pincode = 500083;
// template literals
const message = `Hey ${userName} , your age is ${age} and your email is ${email}. Your from ${country} and your pincode is ${pincode}.`;
// operator
age++;
let isEligible = age > 18 && IsSubscribed;
console.log("updated age is :", age);
console.log("is eligible for subs : ", isEligible);
console.log("Your message is :", message);
