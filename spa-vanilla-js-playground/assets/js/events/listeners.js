import state from "../state.js";
import { replaceSpacesWithSymbol } from "../utils.js";
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
} from "../domElements.js";
import { handleHomeSubmit, handleShowMore, handleGifPageLoading } from "./handlers.js";
import { router } from "../routing/router.js";

// HOME PAGE
function home() {
  homeFormEl.addEventListener("submit", e => {
    e.preventDefault();
  });

  homeInputEl.addEventListener("input", e => {
    state.queryString = replaceSpacesWithSymbol(e.target.value, "+");
    homeSubmitBtnEl.disabled = !state.queryString;
  });

  homeSubmitBtnEl.addEventListener("click", handleHomeSubmit);

  homeSubmitBtnEl.disabled = !state.queryString;
}

// SEARCH PAGE
function search() {
  if (!state.galleryThumbnailsHTML) {
    handleShowMore();
  } else {
    searchGalleryEl.innerHTML = state.galleryThumbnailsHTML;
  }

  searchFormEl.addEventListener("submit", e => {
    e.preventDefault();
  });

  searchInputEl.addEventListener("input", e => {
    state.queryString = replaceSpacesWithSymbol(e.target.value, "+");
    searchSubmitBtnEl.disabled = !state.queryString;
  });

  searchSubmitBtnEl.addEventListener("click", handleShowMore);
  searchShowMoreBtnEl.addEventListener("click", handleShowMore);

  const queryParams = new URLSearchParams(window.location.search);
  const queryStringValueForInput = queryParams.get("q");
  searchInputEl.value = queryStringValueForInput;

  searchSubmitBtnEl.disabled = !state.queryString;

  // FIXME: extract into separate event handler
  searchGalleryEl.addEventListener('click', e => {
    const clickedElement = e.target;
    if (!clickedElement.matches('video.gallery__item')) return;
    // we can pass all parameters as query string
    const {id} = clickedElement.dataset;
    router.goTo(`/gif/${id}`);
  })
}

// GIF PAGE
function gif() {
  handleGifPageLoading();
  // FIXME: extract into separate event handler
  gifGoBackBtn.addEventListener('click', () => {
    window.history.back();
    // const {search, pathname} = window.location;
    // console.log(search)
    // console.log(pathname)
    // router.goTo(pathname, search);
  })
}

export const addEventListenersFor = {
  home,
  search,
  gif
};
