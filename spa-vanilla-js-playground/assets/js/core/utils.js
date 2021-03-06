export function makeQueryStringForSearch(queryStringValue) {
  return `?q=${queryStringValue}`;
}

export function getQueryStringValueOfCurrentPage() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('q');
}

export function getPureFirstPartOfPathName() {
  return location.pathname.split('/').slice(1)[0] || 'home';
}

export function getIdParamValueFromUrl() {
  return window.location.pathname.split('/').reverse()[0];
}

function scrollToY(y) {
  scrollTo({
    behavior: 'smooth',
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
