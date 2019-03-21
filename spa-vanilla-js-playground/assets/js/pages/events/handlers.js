import { OFFSET_STEP } from '../core/constants.js';
import {
  makeQueryString,
  scrollPageToBottom,
  getIdParamValueFromUrl
} from '../core/utils.js';
import HttpService from '../core/httpService.js';
import { Router } from '../routing/router.js';
import state from '../core/state.js';
import { searchGalleryEl } from '../domElements.js';

// ------------------------------- HOME ----------------------------------------

export async function handleHomeSubmit() {
  const searchString = makeQueryString(state.queryStringValue);
  Router.goTo('/search', searchString);
}

// ------------------------------- SEARCH ----------------------------------------

let galleryThumbnailsHTML = '';

export async function handleShowMore() {
  const searchString = makeQueryString(state.queryStringValue);
  window.history.pushState(
    null,
    '',
    `${window.location.origin}/search${searchString}`
  );

  const { data: gifsBlob } = await HttpService.getGifs(
    searchString,
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
  searchGalleryEl.append(galleryRowEl);

  state.galleryThumbnailsHTML += galleryThumbnailsHTML;
  galleryThumbnailsHTML = '';
  state.thumbnailsOffsetInQueryString += OFFSET_STEP;

  scrollPageToBottom();
}

// ------------------------------- GIf -------------------------------------------
export async function handleGifPageLoading() {
  const id = getIdParamValueFromUrl();
  const gifInfo = await HttpService.getGifById(id);
  const {
    imageUrl,
    imageHeight,
    title,
    createdAt,
    username,
    userAvatartUrl
  } = gifInfo;

  const HTMLTemplate = `
  <video
    autoplay loop muted oncanplay="this.play()" onloadedmetadata="this.muted = true"
    class="gif__image"
    src="${imageUrl}"
    height=${imageHeight}
  ></video>

  <div class="gif__short-info">
    <h3>Details</h3>
    <div>Title: ${title}</div>
    <div>Created at: ${createdAt}</div>
  </div>

  <div class="gif__author" ${!username ? 'hidden' : ''}>
    <h3>User</h3>
    <div>${username}</div>
    <div>
      <img
        src="${userAvatartUrl}"
        width="100"
      />
    </div>
  </div>
`;

  const gifRoot = document.getElementById('gif-root');
  gifRoot.innerHTML = HTMLTemplate;
}
