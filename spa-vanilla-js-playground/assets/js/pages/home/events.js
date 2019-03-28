import { makeQueryStringForSearch } from '../../core/utils.js';
import { Router } from '../../core/routing/router.js';
import state from '../../core/state.js';
import { formElement, inputElement, submitBtnElement } from './domElements.js';

async function handleHomeSubmit() {
  const queryString = makeQueryStringForSearch(state.queryStringValue);
  Router.goTo('/search', queryString);
}

export function addEventListeners() {
  formElement.addEventListener('submit', e => {
    e.preventDefault();
  });

  inputElement.addEventListener('input', e => {
    state.queryStringValue = encodeURI(e.target.value);
    submitBtnElement.disabled = !state.queryStringValue;
  });

  submitBtnElement.addEventListener('click', handleHomeSubmit);

  submitBtnElement.disabled = !state.queryStringValue;
}
