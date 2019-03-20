import { OFFSET_STEP } from "../constants.js";
import { searchGalleryEl } from "../domElements.js";
import { makeSearchString, scrollPageToBottom } from "../utils.js";
import * as httpService from "../http-service.js";
import state from "../state.js";
import { router } from "../routing/router.js";

// ------------------------------- HOME ----------------------------------------

export async function handleHomeSubmit() {
  const searchString = makeSearchString(state.queryString);
  // window.history.pushState(null, '', `${window.location.origin}/search${searchString}`);
  router.goTo('/search', searchString);
  
  // const { data: gifsBlob } = await httpService.fetchGifs(
  //   searchString,
  //   state.thumbnailsOffset
  // );

  // const galleryRowEl = document.createElement("div");
  // galleryRowEl.className = "gallery__row";

  // gifsBlob.forEach(blob => {
  //   const { mp4 } = blob.images.fixed_width;
  //   galleryThumbnailsHTML += `<video src="${mp4}" autoplay loop width="200"></video>`;
  // });

  // galleryRowEl.insertAdjacentHTML("beforeend", galleryThumbnailsHTML);
  // galleryEl.append(galleryRowEl);

  // galleryThumbnailsHTML = "";
  // state.thumbnailsOffset += OFFSET_STEP;

  // scrollPageToBottom();
}

// ------------------------------- SEARCH ----------------------------------------

let galleryThumbnailsHTML = "";

export async function handleShowMore() {
  const searchString = makeSearchString(state.queryString);
  window.history.pushState(null, '', `${window.location.origin}/search${searchString}`);
  
  const { data: gifsBlob } = await httpService.fetchGifs(
    searchString,
    state.thumbnailsOffset
  );

  const galleryRowEl = document.createElement("div");
  galleryRowEl.className = "gallery__row";

  gifsBlob.forEach(blob => {
    const { mp4 } = blob.images.fixed_width;
    galleryThumbnailsHTML += `<video src="${mp4}" autoplay loop width="200"></video>`;
  });

  galleryRowEl.insertAdjacentHTML("beforeend", galleryThumbnailsHTML);
  searchGalleryEl.append(galleryRowEl);

  galleryThumbnailsHTML = "";
  state.thumbnailsOffset += OFFSET_STEP;

  scrollPageToBottom();
}

// -------------------------------------------------------------------------------