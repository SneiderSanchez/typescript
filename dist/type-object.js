"use strict";
// type: object
var user;
user = {}; // object
user = {
    id: 1,
    username: "test",
    firstName: "Test name",
    isPro: true,
};
//Object vs object (JS vs TS)
var myObject = {
    id: 1,
    username: "test",
    firstName: "Test name",
    isPro: true,
};
var isInstance = myObject instanceof Object;
console.log("isInstance", isInstance);
