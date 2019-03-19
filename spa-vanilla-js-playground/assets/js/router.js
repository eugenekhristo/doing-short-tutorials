import { addEventListenersForSearchPage } from "../../index.js";
import { updateElementsForSearchPage } from "./domElements.js";

const rootEl = document.getElementById("root");

let homePage = `
  <h1>Home Page</h1>
  <button id="dada">Go search</button>
`;

let searchPage = `
  <h1>Search Page</h1>

  <form class="search" id="search">
    <input type="text" class="search__input" id="searchInput">
    <button class="search__btn" id="submitSearch">Search</button>
  </form>

  <section class="gallery" id="gallery">
    
  </section>

  <button id="showMore">Show Me More 😹</button>
`;

const routes = {
  "/": homePage,
  "/search": searchPage
};

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

const dadaEl = document.getElementById("dada");
dadaEl.addEventListener("click", () => {
  goTo("/search");
  updateElementsForSearchPage();
  setTimeout(() => addEventListenersForSearchPage(), 0);
});
