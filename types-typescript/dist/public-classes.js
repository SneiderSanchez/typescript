"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    titleToString() {
        return `title ${this.title}`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const picture = new Picture(1, "test", PhotoOrientation.Landscape);
picture.id = 50;
