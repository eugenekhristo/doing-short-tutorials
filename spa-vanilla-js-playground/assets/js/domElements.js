import state from "./state.js";

export let formEl = document.getElementById("search");
export let inputEl = document.getElementById("searchInput");
export let submitBtnEl = document.getElementById("submitSearch");
export let galleryEl = document.getElementById("gallery");
export let showMoreBtnEl = document.getElementById("showMore");

export function updateElementsForSearchPage() {
  formEl = document.getElementById("search");
  inputEl = document.getElementById("searchInput");
  submitBtnEl = document.getElementById("submitSearch");
  galleryEl = document.getElementById("gallery");
  showMoreBtnEl = document.getElementById("showMore");
}

submitBtnEl && (submitBtnEl.disabled = !state.inputValue);
