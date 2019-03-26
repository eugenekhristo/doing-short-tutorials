import {
  HOME_PATHNAME_REG_EXP,
  SEARCH_PATHNAME_REG_EXP,
  GIF_PATHNAME_REG_EXP
} from '../constants.js';
import { getPureFirstPartOfPathName } from '../utils.js';
import { selectAllElementsFor } from '../../pages/domElementsModule.js';
import { addEventListenersFor } from '../../pages/domEventsModule.js';
import { routes } from './router.js';

const rootEl = document.getElementById('root');

export function handleRouteSelection(pathName) {
  if (GIF_PATHNAME_REG_EXP.test(pathName)) {
    rootEl.innerHTML = routes['/gif/:id'];
  } else {
    rootEl.innerHTML = routes[pathName];
  }
}

const pathNamesRegExps = [
  HOME_PATHNAME_REG_EXP,
  SEARCH_PATHNAME_REG_EXP,
  GIF_PATHNAME_REG_EXP
];

export function tunePage() {
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
  setTimeout(() => addEventListenersFor[purePathName](), 0);
}
