import { getPureFirstPartOfPathName } from '../utils.js';
import { selectAllElementsFor } from '../../pages/domElementsModule.js';
import { addEventListenersFor } from '../../pages/domEventsModule.js';
import { routes } from './router.js';
import state from '../state.js';

const rootEl = document.getElementById('root');
const pathNamesRegExps = getRegexpsOfAllRoutes(routes);

export function handleRouteSelection(pathName) {
  const routesKeys = Object.keys(routes);
  for (const pathNameRegExp of pathNamesRegExps) {
    if (pathNameRegExp.test(pathName)) {
      const routeToChoose = routesKeys.find(routeName =>
        pathNameRegExp.test(routeName)
      );

      return rootEl.innerHTML = routes[routeToChoose].template;
    }
  }
}

export function selectAllElementsForPageAndAddEventListenersToThem() {
  // if path is not in routes Keys - stop execution (or redirect 404)
  const isKnownPathName = pathNamesRegExps.some(regEx =>
    regEx.test(window.location.pathname)
  );
  if (!isKnownPathName) {
    alert('UNKNOWN ROUTE!');
    return;
  }

  // Select All Elements and addEventListeners for the page with matching pathname
  const purePathName = getPureFirstPartOfPathName();
  selectAllElementsFor[purePathName]();
  addEventListenersFor[purePathName]();
}

export function getRegexpsOfAllRoutes(routes) {
  return Object.values(routes).map(value => value.regexp);
}

export function setPreviousRoutePathnameAndSearch() {
  state.previousRoutePathnameAndSearch = {
    pathname: window.location.pathname,
    search: window.location.search
  };
}
