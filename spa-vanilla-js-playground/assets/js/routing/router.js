import * as pages from './routePages.js';
import { tunePage } from '../../../index.js';


export const routes = {
  "/": pages.homePage,
  "/search": pages.searchPage,
  // "/gif/:id": searchPage,
};

// FIXME: put it into domElements
const rootEl = document.getElementById("root");

export const router = {
  goTo(pathName, searchString = '') {
    window.history.pushState(null, '', window.location.origin + pathName + searchString);
    rootEl.innerHTML = routes[pathName];
    tunePage();
  }
}

// WHEN CLICK back BTN of the browser
// window.onpopstate = () => {
//   rootEl.innerHTML = routes[window.location.pathname];
//   tunePage();
// };

// first loading of the app
rootEl.innerHTML = routes[window.location.pathname];
tunePage();