import { User, Album, Picture, PhotoOrientation } from "./photo-app";

const user = new User(1, "test username", "test", true);
const album = new Album(1, "title album");
const picture = new Picture(1, "title", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);
