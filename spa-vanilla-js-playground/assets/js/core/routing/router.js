import * as pages from './routePages.js';
import state from '../state.js';
import { getPureFirstPartOfPathName} from '../utils.js';
import { selectAllElementsFor } from '../domElements.js';
import { addEventListenersFor } from '../events/listeners.js';

export function handleRouteSelection(pathName) {
  const gifPathNameRegEx = /^\/gif\/\w+$/;

  if (gifPathNameRegEx.test(pathName)) {
    rootEl.innerHTML = routes['/gif/:id'];
  } else {
    rootEl.innerHTML = routes[pathName];
  }
}

const homePathNameRegEx = /^\/$/;
const searchPathNameRegEx = /^\/search$/;
const gifPathNameRegEx = /^\/gif\/\w+$/;

const pathNamesRegEx = [homePathNameRegEx, searchPathNameRegEx, gifPathNameRegEx];

export function tunePage() {
  // if path is not in routes Keys - return (or redirect 404)
  const pagePathName = window.location.pathname;
  const isKnownPathName = pathNamesRegEx.some(regEx => regEx.test(pagePathName));
  if (!isKnownPathName) {
    alert('UNKNOWN ROUTE!');
    return;
  }; // or redirect of 404 page

  // 2) Select AllElements and addEventListeners for the page with matching pathname
  const purePathName = getPureFirstPartOfPathName();
  selectAllElementsFor[purePathName]();
  setTimeout(() => addEventListenersFor[purePathName](), 0);
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



// WHEN CLICK back BTN of the browser
window.onpopstate = () => {
  const {pathname, search} = window.location;
  router.goTo(pathname, search);
};