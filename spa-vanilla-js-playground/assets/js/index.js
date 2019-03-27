import { handleRouteSelection, selectAllElementsForPageAndAddEventListenersToThem } from './core/routing/routerUtils.js';

(function initApp() {
  handleRouteSelection(window.location.pathname);
  selectAllElementsForPageAndAddEventListenersToThem();
})();
