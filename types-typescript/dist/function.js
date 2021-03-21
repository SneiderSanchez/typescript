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
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size,
    };
};
// default values
let createPict = (title, date, size = "100x100") => {
    return {
        title,
        date,
        size,
    };
};
