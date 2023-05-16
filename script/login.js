const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

function submitForm(event) {

    let user = username.value;
    let pass = password.value;

    console.log(user);
    console.log(pass);
    
    event.preventDefault();
};

form.addEventListener('submit', submitForm);