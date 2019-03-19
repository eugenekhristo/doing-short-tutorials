window.addEventListener('load', e => e.preventDefault());

let homePage = `
  <h1>Home Page</h1>
`;

let aboutPage = `
  <h1>About Page</h1>
`;

let contactPage = `
  <h1>Contact Page</h1>
`;

const routes = {
  '/': homePage,
  '/about': aboutPage,
  '/contact': contactPage
};

const contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];

let onNavItemClick = pathName => {
  window.history.pushState(null, '', window.location.origin + pathName);

  if (pathName.includes('?q')) {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get('q'));
  }

  contentDiv.innerHTML = routes[pathName.split('?')[0]];
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
};

// SERVICES

// // get several
// // 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=5&limit=10'

// // single
// // http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T

// let images = '';

// fetch(
//   'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=C1HjBbRbN4I6lKblBGpY1bxcpdopyH6T&offset=5&limit=10'
// )
//   .then(res => res.json())
//   .then(({ data }) => {
//     data.forEach(item => {
//       const { mp4 } = item.images.fixed_width;

//       images += `<video src="${mp4}" autoplay loop></video>`;
//     });

//     document.body.insertAdjacentHTML('afterbegin', images);
//   });
