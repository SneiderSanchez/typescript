"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    Picture.prototype.titleToString = function () {
        return "title " + this.title;
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var picture = new Picture(1, "test", PhotoOrientation.Landscape);
// picture.id = 50; // Error
