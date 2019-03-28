import { selectAllElements } from './domElements.js';
import { addEventListeners } from './events.js';

export function addEventListenersToAllElements() {
  selectAllElements();
  addEventListeners();
}
