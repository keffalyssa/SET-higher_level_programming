// Fetches a Star Wars character name and displays it in DIV#character
const characterDiv = document.querySelector('DIV#character');

async function fetchCharacter () {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error('Request failed: ' + response.status);
    }
    const data = await response.json();
    characterDiv.textContent = data.name;
  } catch (error) {
    characterDiv.textContent = 'Error: could not load character';
  }
}

fetchCharacter();
