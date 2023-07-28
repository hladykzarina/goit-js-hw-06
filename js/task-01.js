const listCat = document.querySelectorAll('.item');
console.log(listCat.length);

listCat.forEach(function (list) {
  console.log(list.firstElementChild.textContent);
  console.dir(list.lastElementChild.children.length);
});
