import { getQueryStringValueOfCurrentPage } from './utils.js';

let thumbnailsOffsetInQueryString = 0;
let queryStringValue = getQueryStringValueOfCurrentPage() || '';
let isAppLoadedForTheFirstTime = true;
let galleryThumbnailsHTML = '';

export default {
  queryStringValue,
  thumbnailsOffsetInQueryString,
  isAppLoadedForTheFirstTime,
  galleryThumbnailsHTML
};
