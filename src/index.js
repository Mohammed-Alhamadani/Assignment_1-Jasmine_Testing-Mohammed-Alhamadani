'use strict';

// window.onload = loginPage;

// function loginPage() {
const loginForm = document.querySelector('.login');

// loginForm.onsubmit = submitHandle;
// }

function submitHandle() {
    const userInfo = document.querySelector('.user__info');
    const passwordInfo = document.querySelector('.password__info');

    const userPasswordInfo = document.querySelector('login__txtbox');

    if (userInfo.value === '') {
        userInfo.classList.add('login__txtbox_error');
        userInfo.focus();
        // return false;
    } else {
        userInfo.classList.remove('login__txtbox_error');
    }
    if (passwordInfo.value === '') {
        passwordInfo.classList.add('login__txtbox_error');
        passwordInfo.focus();
        return false;
    } else {
        passwordInfo.classList.remove('login__txtbox_error');
    }

    document.querySelector('.output__user').innerHTML = userInfo.value;
    document.querySelector('.output__pass').innerHTML = passwordInfo.value;
    document.querySelector('.output').style.display = 'block';

    userInfo.value = '';
    passwordInfo.value = '';
}

function checkLogin(username, password) {
    const myUsername = 'mohammed';
    const myPassword = 'abcdefg123';
    if (username === '') {
        return 'No username entered.';
    }

    if (password === '') {
        return 'No password entered.';
    }

    if (username !== myUsername) {
        return 'Invalid Username.';
    }

    if (password !== myPassword) {
        return 'Invalid Password.';
    }
    return true;
}
