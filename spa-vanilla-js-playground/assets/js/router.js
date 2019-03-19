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

function onNavItemClick(pathName) {
  console.log("DADADA");
  window.history.pushState(null, "", window.location.origin + pathName);

  if (pathName.includes("?q")) {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get("q"));
  }

  rootEl.innerHTML = routes[pathName];
  // contentDiv.innerHTML = routes[pathName.split('?')[0]];
}

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
};

rootEl.innerHTML = routes[window.location.pathname];

const dadaEl = document.getElementById("dada");

dadaEl.addEventListener("click", () => {
  onNavItemClick("/search");
  updateElementsForSearchPage();
  setTimeout(() => addEventListenersForSearchPage(), 0);
});
