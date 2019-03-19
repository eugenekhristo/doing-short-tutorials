import state from './state.js';

export const formEl = document.getElementById("search");
export const inputEl = document.getElementById("searchInput");
export const submitBtnEl = document.getElementById("submitSearch");
export const galleryEl = document.getElementById("gallery");
export const showMoreBtnEl = document.getElementById("showMore");

submitBtnEl.disabled = !state.inputValue;