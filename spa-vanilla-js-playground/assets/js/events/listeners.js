import state from "../state.js";
import { replaceSpacesWithSymbol } from "../utils.js";
import {
  homeFormEl,
  homeInputEl,
  homeSubmitBtnEl,
  searchFormEl,
  searchInputEl,
  searchSubmitBtnEl,
  searchShowMoreBtnEl
} from "../domElements.js";
import { handleHomeSubmit, handleShowMore } from "./handlers.js";

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

  handleShowMore();
}

export const addEventListenersFor = {
  home,
  search
};
