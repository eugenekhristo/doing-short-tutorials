function getRequestUrlForSeveralGifs(searchString, offset = 0) {
  return `https://api.giphy.com/v1/gifs/search${searchString}&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=${offset}&limit=5`;
}

function getRequestUrlForSingleGif(id) {
  return `https://api.giphy.com/v1/gifs/${id}?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T`;
}

function createGifInfoDto(gifBlob) {
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
  getGifs(searchString, offset) {
    return Promise.resolve(
      fetch(getRequestUrlForSeveralGifs(searchString, offset)).then(blob =>
        blob.json()
      )
    );
  },

  async getGifById(id) {
    const { data: gifBlob } = await fetch(getRequestUrlForSingleGif(id)).then(
      blob => blob.json()
    );

    const gifInfo = createGifInfoDto(gifBlob);
    return Promise.resolve(gifInfo);
  }
};

export default HttpService;