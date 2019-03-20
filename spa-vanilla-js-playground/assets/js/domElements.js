import state from "./state.js";

// HOME PAGE
export let homeFormEl;
export let homeInputEl;
export let homeSubmitBtnEl;

function home() {
  homeFormEl = document.getElementById("search");
  homeInputEl = document.getElementById("searchInput");
  homeSubmitBtnEl = document.getElementById("submitSearch");
}

// SEARCH PAGE
export let searchFormEl;
export let searchInputEl;
export let searchSubmitBtnEl;
export let searchGalleryEl;
export let searchShowMoreBtnEl;

function search() {
  searchFormEl = document.getElementById("search");
  searchInputEl = document.getElementById("searchInput");
  searchSubmitBtnEl = document.getElementById("submitSearch");
  searchGalleryEl = document.getElementById("gallery");
  searchShowMoreBtnEl = document.getElementById("showMore");
}

// GIF PAGE
export let gifGoBackBtn;
function gif() {
  gifGoBackBtn = document.getElementById('goBackBtn');
}

export const selectAllElementsFor = {
  home,
  search,
  gif
};

// submitBtnEl && (submitBtnEl.disabled = !state.inputValue);
