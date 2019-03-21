import { handleRouteSelection, tunePage } from './core/routing/routerUtils.js';

(function initApp() {
  handleRouteSelection(window.location.pathname);
  tunePage();
})();
