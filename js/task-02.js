const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

ingredients.map((element) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = element;
  list.append(li);
});

console.log(list);
