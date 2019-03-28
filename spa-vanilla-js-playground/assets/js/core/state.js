import { getQueryStringValueOfCurrentPage } from './utils.js';

export default {
  queryStringValue: getQueryStringValueOfCurrentPage() || '',
  thumbnailsOffsetInQueryString: 0,
  isAppLoadedForTheFirstTime: true,
  galleryThumbnailsHTML: '',
  previousRoutePathnameAndSearch: {
    pathname: window.location.pathname,
    search: window.location.search
  }
};
