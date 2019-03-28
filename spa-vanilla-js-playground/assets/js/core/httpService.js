import state from './state.js';
import { OFFSET_STEP } from './constants.js';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T';

function generateQueryString(options) {
  const keys = Object.keys(options);
  const values = Object.values(options);
  let queryString = '';

  keys.forEach((key, i) => (queryString += `${key}=${values[i]}&`));

  return `?${queryString.slice(0, -1)}`;
}

function getRequestUrlForMultipleGifs(offset = 0) {
  const options = {
    q: state.queryStringValue,
    api_key: API_KEY,
    offset,
    limit: OFFSET_STEP
  };
  return `${BASE_URL}/search${generateQueryString(options)}`;
}

function getRequestUrlForSingleGif(id) {
  return `${BASE_URL}/${id}?api_key=${API_KEY}`;
}

function getGifInfoDto(gifBlob) {
  const { id, title, import_datetime, user, images } = gifBlob;

  return {
    id,
    title,
    createdAt: import_datetime,
    username: user && user.display_name,
    userAvatartUrl: user && user.avatar_url,
    imageUrl: images.original_mp4.mp4,
    imageHeight: images.original_mp4.height
  };
}

const HttpService = {
  getGifs(offset) {
    return fetch(getRequestUrlForMultipleGifs(offset))
      .then(blob => blob.json())
      .catch(console.log);
  },

  async getGifById(id) {
    try {
      const blob = await fetch(getRequestUrlForSingleGif(id));
      const { data: gifBlob } = await blob.json();
      const gifInfo = getGifInfoDto(gifBlob);
      return gifInfo;
    } catch (error) {
      console.log(error);
    }
  }
};

export default HttpService;
