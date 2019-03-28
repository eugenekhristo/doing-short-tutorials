export let formElement;
export let inputElement;
export let submitButtonElement;

export function selectAllElements() {
  formElement = document.getElementById('search');
  inputElement = document.getElementById('searchInput');
  submitButtonElement = document.getElementById('submitSearch');
}
