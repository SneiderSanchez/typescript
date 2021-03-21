"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    titleToString() {
        return `title ${this._title}`;
    }
}
const picture = new Picture(1, "test", PhotoOrientation.Landscape);
console.log(picture.id); // No error, use of get
picture.id = 100; // No error, use of set
