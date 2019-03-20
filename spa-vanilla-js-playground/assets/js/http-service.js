const generateRequestUrlForSeveralGifs = (searchString, offset = 0) => {
  return `http://api.giphy.com/v1/gifs/search${searchString}&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=${offset}&limit=5`;
};

const generateRequestUrlForSingleGif = id => {
  return `http://api.giphy.com/v1/gifs/${id}?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T`;
};

export function fetchGifs(searchString, offset) {
  return Promise.resolve(
    fetch(generateRequestUrlForSeveralGifs(searchString, offset)).then(blob =>
      blob.json()
    )
  );
}

export async function fetchGifById(id) {
  const { data: gifBlob } = await fetch(
    generateRequestUrlForSingleGif(id)
  ).then(blob => blob.json());

  const gifInfo = createGifInfoDto(gifBlob);
  return Promise.resolve(gifInfo);
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
