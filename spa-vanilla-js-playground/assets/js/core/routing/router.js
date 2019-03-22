import { handleRouteSelection, tunePage } from './routerUtils.js';
import state from '../state.js';
import * as routePages from './routePages.js';

export const routes = {
  '/': routePages.homePage,
  '/search': routePages.searchPage,
  '/gif/:id': routePages.gifPage
};

export const Router = {
  goTo(pathName, queryString = '') {
    window.history.pushState(
      null,
      '',
      window.location.origin + pathName + queryString
    );
    handleRouteSelection(pathName);
    tunePage();
    state.isAppLoadedForTheFirstTime = false;
  }
};

window.onpopstate = () => {
  const { pathname, search } = window.location;
  Router.goTo(pathname, search);
};
