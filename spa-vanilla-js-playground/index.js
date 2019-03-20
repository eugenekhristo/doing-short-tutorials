import { getPureFirstPartOfPathName} from './assets/js/utils.js';
import { selectAllElementsFor } from './assets/js/domElements.js';
import { addEventListenersFor } from './assets/js/events/listeners.js';

// FIXME: put somewhere in routing
const homePathNameRegEx = /^\/$/;
const searchPathNameRegEx = /^\/search$/;
const gifPathNameRegEx = /^\/gif\/\w+$/;

const pathNamesRegEx = [homePathNameRegEx, searchPathNameRegEx, gifPathNameRegEx];

export function tunePage() {
  // if path is not in routes Keys - return (or redirect 404)
  const pagePathName = window.location.pathname;
  const isKnownPathName = pathNamesRegEx.some(regEx => regEx.test(pagePathName));
  if (!isKnownPathName) {
    console.log('UNKNOWN ROUTE!');
    return;
  }; // or redirect of 404 page

  // 2) Select AllElements and addEventListeners for the page matching pathname
  const purePathName = getPureFirstPartOfPathName();
  selectAllElementsFor[purePathName]();
  setTimeout(() => addEventListenersFor[purePathName](), 0);
}


