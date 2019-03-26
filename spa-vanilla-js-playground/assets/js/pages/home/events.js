import { makeQueryString, replaceSpacesWithSymbol } from '../../core/utils.js';
import { Router } from '../../core/routing/router.js';
import state from '../../core/state.js';
import { formEl, inputEl, submitBtnEl } from './domElements.js';

async function handleHomeSubmit() {
  const queryString = makeQueryString(state.queryStringValue);
  Router.goTo('/search', queryString);
}

export function home() {
  formEl.addEventListener('submit', e => {
    e.preventDefault();
  });

  inputEl.addEventListener('input', e => {
    state.queryStringValue = replaceSpacesWithSymbol(e.target.value, '+');
    submitBtnEl.disabled = !state.queryStringValue;
  });

  submitBtnEl.addEventListener('click', handleHomeSubmit);

  submitBtnEl.disabled = !state.queryStringValue;
}
