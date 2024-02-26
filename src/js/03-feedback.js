import throttle from "lodash.throttle";

const form = document.querySelector('form.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="messge"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
    const email = emailEl.value;
    const message = messageEl.value;

    const formData = {
        email,
        message,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
