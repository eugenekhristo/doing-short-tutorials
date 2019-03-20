import * as pages from './routePages.js';
import { tunePage } from '../../../index.js';

export const routes = {
  "/": pages.homePage,
  "/search": pages.searchPage,
  "/gif/:id": pages.gifPage,
};

const rootEl = document.getElementById("root");

export const router = {
  goTo(pathName, searchString = '') {
    const gifPathNameRegEx = /^\/gif\/\w+$/;

    window.history.pushState(null, '', window.location.origin + pathName + searchString);

    if (gifPathNameRegEx.test(pathName)) {
      rootEl.innerHTML = routes["/gif/:id"];
    } else {
      rootEl.innerHTML = routes[pathName];
    }

    tunePage();
  }
}

// first loading of the app
rootEl.innerHTML = routes[window.location.pathname];
tunePage();



// WHEN CLICK back BTN of the browser
// window.onpopstate = () => {
//   rootEl.innerHTML = routes[window.location.pathname];
//   tunePage();
// };