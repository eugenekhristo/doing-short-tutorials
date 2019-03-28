export let formElement;
export let inputElement;
export let submitButtonElement;
export let galleryElement;
export let showMoreButtonElement;

export function selectAllElements() {
  formElement = document.getElementById('search');
  inputElement = document.getElementById('searchInput');
  submitButtonElement = document.getElementById('submitSearch');
  galleryElement = document.getElementById('gallery');
  showMoreButtonElement = document.getElementById('showMore');
}