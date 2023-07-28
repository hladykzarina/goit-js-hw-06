const input = document.querySelector('#validation input');
input.addEventListener('blur', handlerInput);

function onBlur(evt) {
  const inputBlur = evt.currentTarget;
  if (inputBlur.value.trim().length === Number(inputBlur.dataset.length)) {
    inputBlur.classList.remove('invalid');
    inputBlur.classList.add('valid');
  } else {
    inputBlur.classList.remove('valid');
    inputBlur.classList.add('valid');
  }
}
console.dir(evt.currentTarget.value);
