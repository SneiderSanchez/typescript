"use strict";
// with JS
function createPictureJS(title, date, size) {
    // ...
}
// with TS
function createPictureTS(title, date, size) {
    // ...
}
// optional params
function createPicture(title, date, size) {
    // ...
}
// flat arrow function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
// default values
var createPict = function (title, date, size) {
    if (size === void 0) { size = "100x100"; }
    return {
        title: title,
        date: date,
        size: size,
    };
};
