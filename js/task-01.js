const listCat = document.querySelectorAll('.item');

console.log(`Number of categories: ${listCat.length}`);

listCat.forEach(function (list) {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.dir(`Category: ${list.lastElementChild.textContent.length}`);
});
