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
  searchGalleryEl
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
  handleShowMore();

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
}

export const addEventListenersFor = {
  home,
  search,
  gif
};
