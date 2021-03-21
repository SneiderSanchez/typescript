import { Album } from "./album";
import { User } from "./user";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photoOrientation";

const user = new User(1, "test username", "test", true);
const album = new Album(1, "title album");
const picture = new Picture(1, "title", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);

user.removeAlbum(album);
console.log("user", user);
