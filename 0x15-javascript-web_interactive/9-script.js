// Fetches the French translation of "hello" and displays it in DIV#hello
document.addEventListener('DOMContentLoaded', () => {
  const helloDiv = document.querySelector('DIV#hello');

  async function fetchHello () {
    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
      if (!response.ok) {
        throw new Error('Request failed: ' + response.status);
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error: could not load translation';
    }
  }

  fetchHello();
});
