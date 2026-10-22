// Fetches how to say "Hello" in the chosen language on click or ENTER
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('INPUT#language_code');
  const button = document.querySelector('INPUT#btn_translate');
  const helloDiv = document.querySelector('DIV#hello');

  async function translate () {
    try {
      const code = encodeURIComponent(input.value);
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=' + code);
      if (!response.ok) {
        throw new Error('Request failed: ' + response.status);
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error: could not load translation';
    }
  }

  button.addEventListener('click', translate);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      translate();
    }
  });
});
