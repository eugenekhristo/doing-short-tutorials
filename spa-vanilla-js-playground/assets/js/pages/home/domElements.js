export let formElement;
export let inputElement;
export let submitBtnElement;

export function selectAllElements() {
  formElement = document.getElementById('search');
  inputElement = document.getElementById('searchInput');
  submitBtnElement = document.getElementById('submitSearch');
}
