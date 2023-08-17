import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const getEmail = document.querySelector('input[name = "email"]')
const getMessage = document.querySelector('textarea[name = "message"]')

const LOCAL_KEY = "feedback-form-state";

form.addEventListener('input', throttle(savedData, 500));

function savedData(){
    const names = {
        email: getEmail.value,
        message: getMessage.value,
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(names));
}

window.addEventListener('load', onLoad);

function onLoad(){
    if(localStorage.getItem(LOCAL_KEY)){
    const {email, message} = JSON.parse(localStorage.getItem(LOCAL_KEY));
    getEmail.value = email;
    getMessage.value = message;
    }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit() {
    console.log({
        email: getEmail.value,
        message: getMessage.value,
      })
    localStorage.removeItem(LOCAL_KEY);
    form.reset();
    
  }