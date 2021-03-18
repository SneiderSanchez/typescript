"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
class Picture {
    constructor(id, title, orientation) {
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientation);
    }
    titleToString() {
        return `title ${__classPrivateFieldGet(this, _title)}`;
    }
}
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
class Album {
    constructor(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    }
}
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
const picture = new Picture(1, "test", PhotoOrientation.Landscape);
// picture.id = 50; // Error
