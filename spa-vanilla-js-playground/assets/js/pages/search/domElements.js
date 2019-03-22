export let formEl;
export let inputEl;
export let submitBtnEl;
export let galleryEl;
export let showMoreBtnEl;

export function search() {
  formEl = document.getElementById('search');
  inputEl = document.getElementById('searchInput');
  submitBtnEl = document.getElementById('submitSearch');
  galleryEl = document.getElementById('gallery');
  showMoreBtnEl = document.getElementById('showMore');
}