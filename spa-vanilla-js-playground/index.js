import {
  formEl,
  inputEl,
  showMoreBtnEl,
  submitBtnEl
} from "./assets/js/domElements.js";
import { replaceSpacesWithSymbol } from "./assets/js/utils.js";
import state from "./assets/js/state.js";
import { handleShowMore } from "./assets/js/eventHandlers.js";


export function addEventListenersForSearchPage() {
  formEl.addEventListener("submit", e => {
    e.preventDefault();
  });

  inputEl.addEventListener("input", e => {
    state.queryString = replaceSpacesWithSymbol(e.target.value, "+");
    submitBtnEl.disabled = !state.queryString;
  });

  submitBtnEl.addEventListener("click", handleShowMore);
  showMoreBtnEl.addEventListener("click", handleShowMore);
}

// add this stuff only if this is /search page
if (window.location.pathname.includes("/search")) {
  addEventListenersForSearchPage();
}