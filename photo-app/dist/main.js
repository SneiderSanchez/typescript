"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, "test username", "test", true);
var album = new photo_app_1.Album(1, "title album");
var picture = new photo_app_1.Picture(1, "title", photo_app_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
