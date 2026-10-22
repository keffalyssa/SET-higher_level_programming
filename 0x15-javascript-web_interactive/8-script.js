// Fetches all Star Wars movie titles and lists them in UL#list_movies
const list = document.querySelector('UL#list_movies');

async function fetchMovies () {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error('Request failed: ' + response.status);
    }
    const data = await response.json();
    data.results.forEach(function (film) {
      const li = document.createElement('li');
      li.textContent = film.title;
      list.appendChild(li);
    });
  } catch (error) {
    const li = document.createElement('li');
    li.textContent = 'Error: could not load movies';
    list.appendChild(li);
  }
}

fetchMovies();
