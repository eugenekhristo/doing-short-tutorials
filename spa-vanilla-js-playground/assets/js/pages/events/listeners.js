import {
  replaceSpacesWithSymbol,
  getQueryStringValueOfCurrentPage
} from '../utils.js';
import { Router } from '../routing/router.js';
import state from '../state.js';
import {
  handleHomeSubmit,
  handleShowMore,
  handleGifPageLoading
} from './handlers.js';
import {
  homeFormEl,
  homeInputEl,
  homeSubmitBtnEl,
  searchFormEl,
  searchInputEl,
  searchSubmitBtnEl,
  searchShowMoreBtnEl,
  searchGalleryEl,
  gifGoBackBtn
} from '../domElements.js';

//------------------------------------------- HOME PAGE -------------------------------------------

function home() {
  homeFormEl.addEventListener('submit', e => {
    e.preventDefault();
  });

  homeInputEl.addEventListener('input', e => {
    state.queryStringValue = replaceSpacesWithSymbol(e.target.value, '+');
    homeSubmitBtnEl.disabled = !state.queryStringValue;
  });

  homeSubmitBtnEl.addEventListener('click', handleHomeSubmit);

  homeSubmitBtnEl.disabled = !state.queryStringValue;
}

//------------------------------------------- SEARCH PAGE -------------------------------------------
function search() {
  if (!state.galleryThumbnailsHTML) {
    handleShowMore();
  } else {
    searchGalleryEl.innerHTML = state.galleryThumbnailsHTML;
  }

  searchFormEl.addEventListener('submit', e => {
    e.preventDefault();
  });

  searchInputEl.addEventListener('input', e => {
    state.queryStringValue = replaceSpacesWithSymbol(e.target.value, '+');
    searchSubmitBtnEl.disabled = !state.queryStringValue;
  });

  searchSubmitBtnEl.addEventListener('click', handleShowMore);
  searchShowMoreBtnEl.addEventListener('click', handleShowMore);

  const queryStringValueForInput = getQueryStringValueOfCurrentPage();
  searchInputEl.value = queryStringValueForInput;

  searchSubmitBtnEl.disabled = !state.queryStringValue;

  // FIXME: extract into separate event handler
  searchGalleryEl.addEventListener('click', e => {
    const clickedElement = e.target;
    if (!clickedElement.matches('video.gallery__item')) return;
    // we can pass all parameters as query string
    const { id } = clickedElement.dataset;
    Router.goTo(`/gif/${id}`);
  });
}

//------------------------------------------- GIF PAGE -------------------------------------------

function gif() {
  handleGifPageLoading();
  // FIXME: extract into separate event handler
  gifGoBackBtn.addEventListener('click', () => {
    if (state.isPageLoadedForTheFirstTime) {
      Router.goTo('/');
    } else {
      window.history.back();
    }
  });
}

export const addEventListenersFor = {
  home,
  search,
  gif
};
