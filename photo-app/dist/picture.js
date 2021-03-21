"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photoOrientation_1 = require("./photoOrientation");
class Picture extends item_1.Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    titleToString() {
        return `title ${this._title}`;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photoOrientation_1.PhotoOrientation;
