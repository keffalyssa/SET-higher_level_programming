#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const filmUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(filmUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const film = JSON.parse(body);
    const characters = film.characters;

    fetchCharacters(characters, 0);
  }
});

function fetchCharacters (characters, index) {
  if (index >= characters.length) {
    return;
  }

  request.get(characters[index], (error, response, body) => {
    if (!error) {
      const character = JSON.parse(body);
      console.log(character.name);
      fetchCharacters(characters, index + 1);
    }
  });
}
