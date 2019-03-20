// state of input field when search page is loaded
let inputValue = '';
// query string for giphy in format: x+xxx+xx
let queryString = '';
// current offset of images for query URL
let thumbnailsOffset = 0;
// HTML string for gallery on search page
let galleryThumbnailsHTML = "";

export default {inputValue, queryString, thumbnailsOffset, galleryThumbnailsHTML}