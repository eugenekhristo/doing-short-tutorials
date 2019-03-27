export let formElement;
export let inputElement;
export let submitBtnElement;
export let galleryElement;
export let showMoreBtnElement;

export function selectAllElements() {
  formElement = document.getElementById('search');
  inputElement = document.getElementById('searchInput');
  submitBtnElement = document.getElementById('submitSearch');
  galleryElement = document.getElementById('gallery');
  showMoreBtnElement = document.getElementById('showMore');
}