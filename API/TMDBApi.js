const API_TOKEN = '5c88f2f1ac2e79214708207ca403f152';

export function getFilmsFromApiWithSearchedText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}