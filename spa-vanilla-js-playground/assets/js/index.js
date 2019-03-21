import { handleRouteSelection, tunePage } from './routing/router.js';

(function initApp() {
  handleRouteSelection(window.location.pathname);
  tunePage();
})();
