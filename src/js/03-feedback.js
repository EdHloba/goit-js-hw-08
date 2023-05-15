var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name = email]');
const messageInput = document.querySelector('textarea[name = message]');


let formInputData = {};

setFormData();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(evt) {
  formInputData[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formInputData));
}

function setFormData() {
  if (localStorage.getItem('feedback-form-state')) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    formInputData = { ...data };

    emailInput.value = data.email ? data.email : '';
    messageInput.value = data.message ? data.message : '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const submitedData = { ...JSON.parse(localStorage.getItem('feedback-form-state')) };

  if (Object.keys(submitedData).length === 0) {
    return alert('Поля вводу повинні бути заповненими!');
  }

  const isAllInputFilled =
    submitedData.hasOwnProperty('email') &&
    submitedData.hasOwnProperty('message');

  if (!isAllInputFilled) {
    return alert('Усі поля мають бути заповнені!');
  }

  console.log(submitedData);

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');

}