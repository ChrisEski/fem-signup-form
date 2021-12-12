const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputFields = [firstName, lastName, email, password];

window.onload = () => {
  inputFields.forEach((field) => {
    field.value = null;
  });
};

const validateForm = function () {
  // FIRST NAME
  if (!firstName.value) {
    setError(firstName, 'First Name cannot be empty');
  } else {
    setCorrect(firstName);
  }

  // LAST NAME
  if (!lastName.value) {
    setError(lastName, 'Last Name cannot be empty');
  } else {
    setCorrect(lastName);
  }

  // EMAIL ADDRESS
  if (!email.value) {
    setError(email, 'Email Address cannot be empty');
  } else if (!isEmailValid(email.value)) {
    setError(email, 'Looks like this is not an email');
  } else {
    setCorrect(email);
  }
  // PASSWORD
  if (!password.value) {
    setError(password, 'Password cannot be empty');
  } else {
    setCorrect(password);
  }
};

const setError = function (element, errorMessage) {
  const parent = element.parentElement;
  parent.dataset.error = 'true';
  const paragraph = parent.nextElementSibling;
  paragraph.innerHTML = errorMessage;
};

const setCorrect = function (element) {
  const parent = element.parentElement;
  parent.dataset.error = 'false';
};

const isEmailValid = function (email) {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regEx.test(email);
};

const isFormValid = function () {
  result = true;

  if (
    firstName.parentElement.dataset.error === 'true' ||
    lastName.parentElement.dataset.error === 'true' ||
    email.parentElement.dataset.error === 'true' ||
    password.parentElement.dataset.error === 'true'
  ) {
    result = false;
  }
  return result;
};

form.addEventListener('submit', (event) => {
  // 1) Client Side Form Validation
  validateForm();

  // 2) If everything is correct submit the form, else don't submit
  if (isFormValid() === true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});
