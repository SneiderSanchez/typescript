export {};
/* 
// 10 , '10'
let idUser: number | string;
idUser = 10;
idUser = "10";

// search username by id

function getUserNameById(id: number | string) {
  /// ...
  return "userTest";
}

getUserNameById(10);
getUserNameById("10"); 
*/

// with Custom types : TS
type IdUser = number | string;
type Username = string;

let idUser: IdUser;
idUser = 10;
idUser = "10";

// search username by id

function getUserNameById(id: IdUser): Username {
  /// ...
  return "userTest";
}

getUserNameById(10);
getUserNameById("10");

// literal types
// 100x100, 500x500, 1000x1000

// type SqueareSize = string | number;
type SqueareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SqueareSize = '200x200'; // Error
let smallPicture: SqueareSize = "100x100";
