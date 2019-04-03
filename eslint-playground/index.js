// npx install-peerdeps --dev eslint-config-airbnb
/* eslint-disable no-console */

// allowing some vars that are not
// declared but can be used by third-party libraries
/* globals hello */

const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 
  500);
});

Promise.all([weather, tweets]).then((responses) => {
  const [weatherInfo, tweetInfo] = responses;
  // eslint-disable-next-line no-console
  console.log(weatherInfo, tweetInfo);
});

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise.all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then((responses) => {
    console.log(responses);
  });

hello();

// turn-off and on eslint for blocks of lines
/* eslint-disable */
var what = 22;
/* eslint-enable */
