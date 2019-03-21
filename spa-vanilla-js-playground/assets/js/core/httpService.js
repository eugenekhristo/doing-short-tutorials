function getRequestUrlForSeveralGifs(queryString, offset = 0) {
  return `https://api.giphy.com/v1/gifs/search${queryString}&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=${offset}&limit=5`;
}

function getRequestUrlForSingleGif(id) {
  return `https://api.giphy.com/v1/gifs/${id}?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T`;
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
  getGifs(queryString, offset) {
    return Promise.resolve(
      fetch(getRequestUrlForSeveralGifs(queryString, offset))
      .then(blob => blob.json())
      .catch(console.log)
    );
  },

  async getGifById(id) {
    try {
      const { data: gifBlob } = await fetch(getRequestUrlForSingleGif(id))
                                .then(blob => blob.json());

      const gifInfo = getGifInfoDto(gifBlob);
      return Promise.resolve(gifInfo);

    } catch (error) {
      console.log(error);
    }
  }
};

export default HttpService;
