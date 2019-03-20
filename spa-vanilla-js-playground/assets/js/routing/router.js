import * as pages from './routePages.js';

export const routes = {
  "/": pages.homePage,
  "/search": pages.searchPage,
  // "/gif/:id": searchPage,
};

// FIXME: put it into domElements
const rootEl = document.getElementById("root");


// TODO: make a router object and add this one as method
function goTo(pathName) {
  window.history.pushState(null, "", window.location.origin + pathName);

  // if (pathName.includes("?q")) {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   console.log(queryParams.get("q"));
  // }

  rootEl.innerHTML = routes[pathName];
  // contentDiv.innerHTML = routes[pathName.split('?')[0]];
}

window.onpopstate = () => {
  rootEl.innerHTML = routes[window.location.pathname];
  // TODO: when click on the button go back - refresh all elements in domElements for given page
  // also make different queryElements for different pages of the app
  // also update all event listeners for the page
  // maybe make a huge function which would go with switch statement and then call
  // set of functions for particular path
  console.log(window.location.pathname);
};

// first loading of the app
rootEl.innerHTML = routes[window.location.pathname];
