export {};
// [1,'userName']
let user: [number, string];

user = [1, "username"];

console.log("user", user);

// multiple values
// id,username,isPro

let userInfo: [number, string, boolean];
userInfo = [2, "username", true];

// tuple array

let array: [number, string][] = [];

array.push([1, "test"]);
array.push([2, "test2"]);
array.push([3, "test3"]);

// use of array functions on tuples

array[2][1] = array[2][1].concat("001"); // test3001

console.log(array);
