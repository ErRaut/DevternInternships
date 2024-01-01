// Code for input
   
let email = document.forms['form']['email'];
let userName = document.forms['form']['username'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let userName_error = document.getElementById('user_error');
let pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_verify);
userName.addEventListener('textInput', user_verify);
password.addEventListener('textInput', pass_verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (userName.value.length < 6) {
        userName.style.border = "1px solid red";
        userName_error.style.display = "block";
        userName.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}


function user_verify_verify() {
    if (userName.value.length >= 5) {
        userName.style.border = "1px solid silver";
        userName_error.style.display = "none";
        return true;
    }
}


function pass_verify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}