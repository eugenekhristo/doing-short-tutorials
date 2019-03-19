/**
 * Take any string and trims spaces and also replaces any 
 * amount of spaces with provided symbol
 * @param {string} text source from which spaces must be
 *  replaced with provided symbol
 * @param {string} symbol symbol for space replacement
 * @returns {string} string without spaces with provided symbol
 */
export function replaceSpacesWithSymbol(text = "", symbol = "") {
  return text.trim().replace(/\s+/g, symbol);
}

/**
 * Take a query string and returns "search string"
 * @param {string} queryString string in a+bc+a format
 * @returns {string} string in '?q=queryString' format
 */
export function makeSearchString(queryString) {
  return `?q=${queryString}`;
}

function scrollToY(y) {
  scrollTo({
    behavior: "smooth",
    top: y
  });
}

export function scrollPageToBottom() {
  const pageScrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  setTimeout(() => scrollToY(pageScrollHeight), 200);
}
