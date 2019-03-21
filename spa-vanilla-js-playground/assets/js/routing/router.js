import * as pages from './routePages.js';
import { tunePage } from '../../../index.js';
import state from '../state.js';

function handleRouteSelection(pathName) {
  const gifPathNameRegEx = /^\/gif\/\w+$/;

  if (gifPathNameRegEx.test(pathName)) {
    rootEl.innerHTML = routes['/gif/:id'];
  } else {
    rootEl.innerHTML = routes[pathName];
  }
}

export const routes = {
  "/": pages.homePage,
  "/search": pages.searchPage,
  "/gif/:id": pages.gifPage,
};

const rootEl = document.getElementById("root");

export const router = {
  goTo(pathName, searchString = '') {
    window.history.pushState(null, '', window.location.origin + pathName + searchString);
    handleRouteSelection(pathName);
    tunePage();
    state.isPageLoadedForTheFirstTime = false;
  }
}

// first loading of the app
handleRouteSelection(window.location.pathname);
tunePage();



// WHEN CLICK back BTN of the browser
window.onpopstate = () => {
  const {pathname, search} = window.location;
  router.goTo(pathname, search);
};