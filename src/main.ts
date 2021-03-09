// console.log("Hey Platzi world!");

// Number
// Explicit

let phone: number;
phone = 123456789;
// phone = "hola"; // Error

// implicit
let phoneNumber = 123456789;
// phoneNumber = true; // Error

let hex: number = 0xf;
let binary: number = 0b1010;
let octal: number = 0o744;

// Type: Boolean

// Explicit
let isPro: boolean;
isPro = false;
// isPro = 10; // Error

//Implicit
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error

// Type: string

let userName: string = "sneider";
userName = "pedro";
// userName = false; // Error

// Template String
let userInfo: string;
userInfo = `I'm ${userName} and my number is ${phone}!`;

console.log(userInfo);
