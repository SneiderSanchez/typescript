"use strict";
// console.log("Hey Platzi world!");
// Number
// Explicit
let phone;
phone = 123456789;
// phone = "hola"; // Error
// implicit
let phoneNumber = 123456789;
// phoneNumber = true; // Error
let hex = 0xf;
let binary = 0b1010;
let octal = 0o744;
// Type: Boolean
// Explicit
let isPro;
isPro = false;
// isPro = 10; // Error
//Implicit
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
// Type: string
let userName = "sneider";
userName = "pedro";
// userName = false; // Error
// Template String
let userInfo;
userInfo = `I'm ${userName} and my number is ${phone}!`;
console.log(userInfo);
