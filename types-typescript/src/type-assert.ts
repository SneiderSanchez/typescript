// <> Angle Bracket Syntax

let username: any;
username = "test";

// We have a string, TS trust me!

let message: string =
  (<string>username).length > 5 ? `Hey ${username}` : "username is too short";

// as

message =
  (username as string).length > 5 ? `Hey ${username}` : "username is too short";
