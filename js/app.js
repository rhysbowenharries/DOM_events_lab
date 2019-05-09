document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newListItem = document.createElement('li')
    newListItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}` 

    const list = document.querySelector('#reading-list');
    list.appendChild(newListItem)


    document.getElementById('new-item-form').reset();
  }