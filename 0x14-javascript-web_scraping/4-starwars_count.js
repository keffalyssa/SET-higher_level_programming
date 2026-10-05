#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const films = data.results;
    let count = 0;

    films.forEach((film) => {
      film.characters.forEach((charUrl) => {
        if (charUrl.endsWith('/18/') || charUrl.endsWith('/18')) {
          count++;
        }
      });
    });

    console.log(count);
  }
});
