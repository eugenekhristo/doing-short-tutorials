import { OFFSET_STEP } from "../constants.js";
import { searchGalleryEl } from "../domElements.js";
import {
  makeSearchString,
  scrollPageToBottom,
  getIdParamValueFromUrl
} from "../utils.js";
import * as httpService from "../http-service.js";
import state from "../state.js";
import { router } from "../routing/router.js";
import { tunePage } from "../../../index.js";

// ------------------------------- HOME ----------------------------------------

export async function handleHomeSubmit() {
  const searchString = makeSearchString(state.queryString);
  router.goTo("/search", searchString);
}

// ------------------------------- SEARCH ----------------------------------------

let galleryThumbnailsHTML = "";

export async function handleShowMore() {
  const searchString = makeSearchString(state.queryString);
  window.history.pushState(
    null,
    "",
    `${window.location.origin}/search${searchString}`
  );

  const { data: gifsBlob } = await httpService.fetchGifs(
    searchString,
    state.thumbnailsOffset
  );

  const galleryRowEl = document.createElement("div");
  galleryRowEl.className = "gallery__row";

  gifsBlob.forEach(blob => {
    const { mp4 } = blob.images.fixed_width;
    galleryThumbnailsHTML += `
    <video
      title="Show detailed info"
      class="gallery__item" 
      src="${mp4}" 
      autoplay 
      loop 
      width="200"
      data-id="${blob.id}"
    >
    </video>
    `;
  });

  galleryRowEl.insertAdjacentHTML("beforeend", galleryThumbnailsHTML);
  searchGalleryEl.append(galleryRowEl);

  galleryThumbnailsHTML = "";
  state.thumbnailsOffset += OFFSET_STEP;

  scrollPageToBottom();
}

// ------------------------------- GIf -------------------------------------------
export async function handleGifPageLoading() {
  const id = getIdParamValueFromUrl();
  const gifInfo = await httpService.fetchGifById(id);
  const {imageUrl, imageHeight, title, createdAt, username, userAvatartUrl} = gifInfo;

  const HTMLTemplate  = `
  <video
    class="gif__image"
    src="${imageUrl}"
    height=${imageHeight}
    autoplay
    loop
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
