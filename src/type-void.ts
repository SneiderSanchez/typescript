// Void
//Explicit
function showInfo(user: any): any {
  console.log("user info", user.id, user.username, user.firstName);
  // return "hey";
}

showInfo({ id: 1, username: "test", firstName: "Test Name" });

//Implicit

function showUserInfo(user: any) {
  console.log(`My username is ${user.username}`);
}

showUserInfo({ id: 1, username: "test", firstName: "Test Name" });

// Type void as a datatype of a variable

let unusable: void;
unusable = null;
unusable = undefined;

// Type: Never

function handleError(code: number, message: string): never {
  // Code process...
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not found");
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

// infinite loop
sumNumbers(10);
