// ==================================== SERVICES ====================================
// KEY - C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T

// get several
// 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=5&limit=10'

// single
// http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T


const generateRequestUrlForSeveralGifs = (searchString, offset = 0) => {
  return `http://api.giphy.com/v1/gifs/search${searchString}&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=${offset}&limit=5`;
};

const httpService = (function() {
  const fetchGifs = (searchString, offset) => {
    return Promise.resolve(
      fetch(generateRequestUrlForSeveralGifs(searchString, offset)).then(blob =>
        blob.json()
      )
    );
  };

  return { fetchGifs };
})();

// ==================================== CONST ====================================
const OFFSET_STEP = 5;

// ==================================== UTILS ====================================
const replaceSpacesWithSymbol = (text = "", symbol = "") => {
  return text.trim().replace(/\s+/g, symbol);
};

const makeSearchString = queryString => `?q=${queryString}`;

const scrollPageToBottom = () => {
  const pageScrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  scrollTo(0, pageScrollHeight, {
    behavior: 'smooth',
  });
}

// ==================================== ELEMENTS ====================================
const formEl = document.getElementById("search");
const inputEl = document.getElementById("searchInput");
const submitBtnEl = document.getElementById("submitSearch");
const galleryEl = document.getElementById("gallery");
const showMoreBtnEl = document.getElementById("showMore");

// ==================================== STATE ====================================
const inputValue = inputEl.value.trim();
let queryString = inputEl.value.trim();
let thumbnailsOffset = 0;

// ==================================== CONDITIONS ====================================
submitBtnEl.disabled = !inputValue;

// ==================================== TEMPLATE STRINGS ====================================
let galleryThumbnailsHTML = '';

// ==================================== HANDLERS ====================================

const handleShowMore = async () => {
  // window.history.pushState(null, '', `${window.location.origin}${searchString}`);
  const searchString = makeSearchString(queryString);
  const { data: gifsBlob } = await httpService.fetchGifs(searchString, thumbnailsOffset);

  const galleryRowEl = document.createElement('div');
  galleryRowEl.className = 'gallery__row';

  gifsBlob.forEach(blob => {
    const { mp4 } = blob.images.fixed_width;
    galleryThumbnailsHTML += `<video src="${mp4}" autoplay loop width="200"></video>`;
  });

  galleryRowEl.insertAdjacentHTML("beforeend", galleryThumbnailsHTML);
  galleryEl.append(galleryRowEl);

  galleryThumbnailsHTML = '';
  thumbnailsOffset += OFFSET_STEP;

  setTimeout(scrollPageToBottom, 200);
}

// ==================================== LISTENERS ====================================
formEl.addEventListener("submit", e => {
  e.preventDefault();
});

inputEl.addEventListener("input", e => {
  queryString = replaceSpacesWithSymbol(e.target.value, "+");
  submitBtnEl.disabled = !queryString;
});

// submit
submitBtnEl.addEventListener("click", handleShowMore);
showMoreBtnEl.addEventListener("click", handleShowMore);
