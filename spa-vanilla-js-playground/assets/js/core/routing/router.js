import {
  handleRouteSelection,
  selectAllElementsForPageAndAddEventListenersToThem,
  setPreviousRoutePathnameAndSearch
} from './routerUtils.js';
import state from '../state.js';
import * as routePages from './routePages.js';
import { handleHistoryGoBack } from '../../pages/gif/events.js';

export const routes = {
  '/': {
    template: routePages.homePage,
    regexp: /^\/$/
  },
  '/search': {
    template: routePages.searchPage,
    regexp: /^\/search$/
  },
  '/gif/:id': {
    template: routePages.gifPage,
    regexp: /^\/gif\/:?\w+$/
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
    selectAllElementsForPageAndAddEventListenersToThem();
    state.isAppLoadedForTheFirstTime = false;
  }
};


window.addEventListener('popstate', handleHistoryGoBack);
