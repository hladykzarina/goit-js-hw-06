const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { email, password } = evt.currentTarget.elements;
  console.log(email.value);
  console.log(password.value);

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    console.log({ Email: email.value, Password: password.value });
  }

  evt.currentTarget.reset();
}
