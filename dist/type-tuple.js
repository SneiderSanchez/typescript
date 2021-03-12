"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1,'userName']
var user;
user = [1, "username"];
console.log("user", user);
// multiple values
// id,username,isPro
var userInfo;
userInfo = [2, "username", true];
// tuple array
var array = [];
array.push([1, "test"]);
array.push([2, "test2"]);
array.push([3, "test3"]);
// use of array functions on tuples
array[2][1] = array[2][1].concat("001"); // test3001
console.log(array);
