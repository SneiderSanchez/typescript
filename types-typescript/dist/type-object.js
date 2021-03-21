"use strict";
// type: object
let user;
user = {}; // object
user = {
    id: 1,
    username: "test",
    firstName: "Test name",
    isPro: true,
};
//Object vs object (JS vs TS)
const myObject = {
    id: 1,
    username: "test",
    firstName: "Test name",
    isPro: true,
};
const isInstance = myObject instanceof Object;
console.log("isInstance", isInstance);
