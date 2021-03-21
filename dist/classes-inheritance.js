"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Super class
class Item {
    constructor(id, tittle) {
        this._id = id;
        this._title = tittle;
    }
    get id() {
        return this._id;
    }
    /*   set id(id: number) {
      this._id = id;
    }
   */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    titleToString() {
        return `title ${this._title}`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const picture = new Picture(1, "test", PhotoOrientation.Landscape);
console.log(picture.id); // No error, use of get
// picture.id = 100; // Error, is ReadOnly
// const item = new Item(1, 'test title') // Error, is an abstract class
