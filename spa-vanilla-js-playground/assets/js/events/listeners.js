import { homePageElements, searchPageElements } from '../domElements.js';
import { handleShowMore } from './handlers.js';

// HOME PAGE
function home() {
  console.log(homePageElements);

  homePageElements.formEl.addEventListener('submit', e => {
    e.preventDefault();
  });

  homePageElements.inputEl.addEventListener('input', e => {
    state.queryString = replaceSpacesWithSymbol(e.target.value, '+');
    homePageElements.submitBtnEl.disabled = !state.queryString;
  });

  homePageElements.submitBtnEl.addEventListener('click', handleShowMore);
  homePageElements.showMoreBtnEl.addEventListener('click', handleShowMore);
}

// SEARCH PAGE


export const addEventListenersFor = {
  home
}