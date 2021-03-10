// Void
//Explicit
function showInfo(user) {
    console.log("user info", user.id, user.username, user.firstName);
    // return "hey";
}
showInfo({ id: 1, username: "test", firstName: "Test Name" });
//Implicit
function showUserInfo(user) {
    console.log("My username is " + user.username);
}
showUserInfo({ id: 1, username: "test", firstName: "Test Name" });
// Type void as a datatype of a variable
var unusable;
unusable = null;
unusable = undefined;
// Type: Never
function handleError(code, message) {
    // Code process...
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not found");
}
catch (error) { }
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
// infinite loop
sumNumbers(10);
