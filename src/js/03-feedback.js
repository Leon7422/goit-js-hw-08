import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', sendUserFeedback);
form.addEventListener('input', throttle(saveUserData, 500));

autoWriteUserData();

function sendUserFeedback(e) {
  e.preventDefault();

  //console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  // можна було зробити консоль лог 1 строчкою через local storage, але тоді є мізерна доля ймовірності що ми попадемо на сабміт форми поки апдейт local storage буде в тротлі. Тим самим ризикуємо втратити декілька букв/символів в фінальному консоль лозі.
  console.log({
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  });
  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="message"]').value = '';
  localStorage.removeItem('feedback-form-state');
}

function saveUserData() {
  let email = document.querySelector('[name="email"]').value;
  let message = document.querySelector('[name="message"]').value;

  const localeStorageData = {
    email,
    message,
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(localeStorageData)
  );
}

function autoWriteUserData() {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }
  const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
  document.querySelector('[name="email"]').value = userData.email;
  document.querySelector('[name="message"]').value = userData.message;
}
