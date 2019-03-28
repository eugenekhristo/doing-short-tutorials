import { OFFSET_STEP } from '../../core/constants.js';
import {
  makeQueryStringForSearch,
  getQueryStringValueOfCurrentPage,
  scrollPageToBottom
} from '../../core/utils.js';
import HttpService from '../../core/httpService.js';
import { Router } from '../../core/routing/router.js';
import state from '../../core/state.js';
import {
  formElement,
  inputElement,
  submitBtnElement,
  galleryElement,
  showMoreBtnElement
} from './domElements.js';

let galleryThumbnailsHTML = '';

async function handleShowMore() {
  const queryString = makeQueryStringForSearch(state.queryStringValue);
  window.history.replaceState(
    null,
    '',
    `${window.location.origin}/search${queryString}`
  );

  const { data: gifsBlob } = await HttpService.getGifs(
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
  galleryElement.append(galleryRowEl);

  state.galleryThumbnailsHTML += galleryThumbnailsHTML;
  galleryThumbnailsHTML = '';
  state.thumbnailsOffsetInQueryString += OFFSET_STEP;

  scrollPageToBottom();
}

export function addEventListeners() {
  if (!state.galleryThumbnailsHTML) {
    handleShowMore();
  } else {
    galleryElement.innerHTML = state.galleryThumbnailsHTML;
  }

  formElement.addEventListener('submit', e => {
    e.preventDefault();
  });

  inputElement.addEventListener('input', e => {
    state.queryStringValue = encodeURI(e.target.value);
    submitBtnElement.disabled = !state.queryStringValue;
  });

  submitBtnElement.addEventListener('click', handleShowMore);
  showMoreBtnElement.addEventListener('click', handleShowMore);

  const queryStringValueForInput = getQueryStringValueOfCurrentPage();
  inputElement.value = queryStringValueForInput;

  submitBtnElement.disabled = !state.queryStringValue;

  galleryElement.addEventListener('click', e => {
    const clickedElement = e.target;
    if (!clickedElement.matches('video.gallery__item')) return;
    // we can pass all parameters as query string
    const { id } = clickedElement.dataset;
    Router.goTo(`/gif/${id}`);
  });
}
