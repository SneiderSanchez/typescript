"use strict";
// Explicit
let idUser;
idUser = 1; // number
idUser = "hey"; // string
console.log("idUser", idUser);
// Implicito
let otherId;
otherId = 1;
otherId = "hey";
otherId = true;
console.log("otherId", otherId);
let surprice = "hello typescript";
// surprice.sayHello(); //Error
const res = surprice.substring("6"); //Error
console.log("res", res);
