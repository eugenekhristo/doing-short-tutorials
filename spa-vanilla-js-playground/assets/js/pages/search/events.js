import {
  makeQueryString,
  replaceSpacesWithSymbol,
  getQueryStringValueOfCurrentPage
} from '../../core/utils.js';
import { HttpService } from '../../core/httpService.js';
import * as state from '../../core/state.js';
import {
  formEl,
  inputEl,
  submitBtnEl,
  galleryEl,
  showMoreBtnEl
} from './domElements.js';

let galleryThumbnailsHTML = '';

async function handleShowMore() {
  const queryString = makeQueryString(state.queryStringValue);
  window.history.pushState(
    null,
    '',
    `${window.location.origin}/search${queryString}`
  );

  const { data: gifsBlob } = await HttpService.getGifs(
    queryString,
    state.thumbnailsOffsetInQueryString
  );

  const galleryRowEl = document.createElement('div');
  galleryRowEl.className = 'gallery__row';

  gifsBlob.forEach(blob => {
    const { mp4 } = blob.images.fixed_width;
    galleryThumbnailsHTML += `
    <video
      title="Show detailed info"
      class="gallery__item" 
      src="${mp4}" 
      autoplay loop muted oncanplay="this.play()" onloadedmetadata="this.muted = true" 
      width="200"
      data-id="${blob.id}"
    >
    </video>
    `;
  });

  galleryRowEl.insertAdjacentHTML('beforeend', galleryThumbnailsHTML);
  galleryEl.append(galleryRowEl);

  state.galleryThumbnailsHTML += galleryThumbnailsHTML;
  galleryThumbnailsHTML = '';
  state.thumbnailsOffsetInQueryString += OFFSET_STEP;

  scrollPageToBottom();
}

export function search() {
  if (!state.galleryThumbnailsHTML) {
    handleShowMore();
  } else {
    galleryEl.innerHTML = state.galleryThumbnailsHTML;
  }

  formEl.addEventListener('submit', e => {
    e.preventDefault();
  });

  inputEl.addEventListener('input', e => {
    state.queryStringValue = replaceSpacesWithSymbol(e.target.value, '+');
    submitBtnEl.disabled = !state.queryStringValue;
  });

  submitBtnEl.addEventListener('click', handleShowMore);
  showMoreBtnEl.addEventListener('click', handleShowMore);

  const queryStringValueForInput = getQueryStringValueOfCurrentPage();
  inputEl.value = queryStringValueForInput;

  submitBtnEl.disabled = !state.queryStringValue;

  galleryEl.addEventListener('click', e => {
    const clickedElement = e.target;
    if (!clickedElement.matches('video.gallery__item')) return;
    // we can pass all parameters as query string
    const { id } = clickedElement.dataset;
    Router.goTo(`/gif/${id}`);
  });
}
