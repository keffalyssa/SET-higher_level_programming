// Adds, removes, and clears LI elements using an array as the source of truth
document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const list = document.querySelector('UL.my_list');

  function render () {
    list.innerHTML = '';
    items.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  document.querySelector('DIV#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });

  document.querySelector('DIV#remove_item').addEventListener('click', () => {
    if (items.length === 0) {
      return;
    }
    items.pop();
    render();
  });

  document.querySelector('DIV#clear_list').addEventListener('click', () => {
    items = [];
    render();
  });
});
