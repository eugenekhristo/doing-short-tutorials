import {
  handleRouteSelection,
  setPreviousRoutePathnameAndSearch
} from './routerUtils.js';
import state from '../state.js';
import * as routePages from './routePages.js';
import { addEventListenersToElements as addEventListenersForHome } from '../../pages/home/initializePage.js';
import { addEventListenersToAllElements as addEventListenersForSearch } from '../../pages/search/initializePage.js';
import { addEventListenersToAllElements as addEventListenersForGif } from '../../pages/gif/initializePage.js';

export const routes = {
  '/': {
    template: routePages.homePage,
    regexp: /^\/$/,
    addEventListenersForThePage: addEventListenersForHome
  },
  '/search': {
    template: routePages.searchPage,
    regexp: /^\/search$/,
    addEventListenersForThePage: addEventListenersForSearch
  },
  '/gif/:id': {
    template: routePages.gifPage,
    regexp: /^\/gif\/:?\w+$/,
    addEventListenersForThePage: addEventListenersForGif
  }
};

export const Router = {
  goTo(pathName, queryString = '') {
    setPreviousRoutePathnameAndSearch();

    window.history.pushState(
      null,
      '',
      window.location.origin + pathName + queryString
    );
    handleRouteSelection(pathName);
    state.isAppLoadedForTheFirstTime = false;
  }
};

window.addEventListener('popstate', () => {
  handleRouteSelection(window.location.pathname);
});
