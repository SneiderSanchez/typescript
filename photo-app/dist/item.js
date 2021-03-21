"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
// Super class
class Item {
    constructor(id, tittle) {
        this._id = id;
        this._title = tittle;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
exports.Item = Item;
