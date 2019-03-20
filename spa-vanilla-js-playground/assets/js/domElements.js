import state from "./state.js";

// HOME PAGE
export const homePageElements = {
  formEl: null,
  inputEl: null,
  submitBtnEl: null,
}

function home() {
  homePageElements.formEl = document.querySelector("#search");
  homePageElements.inputEl = document.querySelector("#searchInput");
  homePageElements.submitBtnEl = document.querySelector("#submitSearch");
}

// SEARCH PAGE
// export let formEl = document.getElementById("search");
// export let inputEl = document.getElementById("searchInput");
// export let submitBtnEl = document.getElementById("submitSearch");
// export let galleryEl = document.getElementById("gallery");
// export let showMoreBtnEl = document.getElementById("showMore");

export const searchPageElements = {
  formEl: null,
  inputEl: null,
  submitBtnEl: null,
  galleryEl: null,
  showMoreBtnEl: null,
}

function search() {
  searchPageElements.formEl = document.getElementById("search");
  searchPageElements.inputEl = document.getElementById("searchInput");
  searchPageElements.submitBtnEl = document.getElementById("submitSearch");
  searchPageElements.galleryEl = document.getElementById("gallery");
  searchPageElements.showMoreBtnEl = document.getElementById("showMore");
}

export const selectAllElementsFor = {
  home, search
}


// submitBtnEl && (submitBtnEl.disabled = !state.inputValue);
