import { getIdParamValueFromUrl } from '../../core/utils.js';
import HttpService from '../../core/httpService.js';
import { Router } from '../../core/routing/router.js';
import state from '../../core/state.js';
import { goBackButton } from './domElements.js';
import { setPreviousRoutePathnameAndSearch } from '../../core/routing/routerUtils.js';

async function handleGifPageLoading() {
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

export function handleHistoryGoBack() {
  if (state.isAppLoadedForTheFirstTime) {
    Router.goTo('/');
  } else {
    const { pathname, search } = state.previousRoutePathnameAndSearch;
    Router.goTo(pathname, search);
  }

  setPreviousRoutePathnameAndSearch();
}

export function gif() {
  handleGifPageLoading();

  goBackButton.addEventListener('click', handleHistoryGoBack);
}
