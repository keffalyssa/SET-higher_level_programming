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

    characters.forEach((charUrl) => {
      request.get(charUrl, (charError, charResponse, charBody) => {
        if (!charError) {
          const character = JSON.parse(charBody);
          console.log(character.name);
        }
      });
    });
  }
});
