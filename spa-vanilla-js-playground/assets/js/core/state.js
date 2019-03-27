import { getQueryStringValueOfCurrentPage } from './utils.js';

let thumbnailsOffsetInQueryString = 0;
let queryStringValue = getQueryStringValueOfCurrentPage() || '';
let isAppLoadedForTheFirstTime = true;
let galleryThumbnailsHTML = '';
let previousRoutePathnameAndSearch =  {
  pathname: window.location.pathname,
  search: window.location.search
};

export default {
  queryStringValue,
  thumbnailsOffsetInQueryString,
  isAppLoadedForTheFirstTime,
  galleryThumbnailsHTML,
  previousRoutePathnameAndSearch};
