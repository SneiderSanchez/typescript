"use strict";
// Explicit
var idUser;
idUser = 1; // number
idUser = "hey"; // string
console.log("idUser", idUser);
// Implicito
var otherId;
otherId = 1;
otherId = "hey";
otherId = true;
console.log("otherId", otherId);
var surprice = "hello typescript";
// surprice.sayHello(); //Error
var res = surprice.substring("6"); //Error
console.log("res", res);
