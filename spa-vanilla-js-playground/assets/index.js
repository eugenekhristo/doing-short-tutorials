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
  '/contact': contactPage,
};

const contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];

let onNavItemClick = (pathName) => {
  window.history.pushState(
    null, 
    '',
    window.location.origin + pathName
  );

  if (pathName.includes('?q')) {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get('q'));
  }

  contentDiv.innerHTML = routes[pathName.split('?')[0]];
}

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}
