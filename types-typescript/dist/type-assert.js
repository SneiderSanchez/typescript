"use strict";
// <> Angle Bracket Syntax
let username;
username = "test";
// We have a string, TS trust me!
let message = username.length > 5 ? `Hey ${username}` : "username is too short";
// as
message =
    username.length > 5 ? `Hey ${username}` : "username is too short";
