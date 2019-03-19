// KEY - C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T

// get several
// 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=5&limit=10'

// single
// http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T


const generateRequestUrlForSeveralGifs = (searchString, offset = 0) => {
  return `http://api.giphy.com/v1/gifs/search${searchString}&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=${offset}&limit=5`;
};

export function fetchGifs(searchString, offset) {
  return Promise.resolve(
    fetch(generateRequestUrlForSeveralGifs(searchString, offset)).then(blob =>
      blob.json()
    )
  );
};