import Security from './services/Security'
import 'bootstrap/dist/css/bootstrap.min.css'

var security = new Security(API_PATH);
var showLogin = true;

function login(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    security.login(email, password)
        .then(value => {
            localStorage.setItem('token', value.token);
            window.location.href = '/';
            console.log(value);
        })
        .catch(err => console.error(err));
}



function isLoged(){
    var token = localStorage.getItem('token');

    if (token === null || token === undefined){
        return false;
    }

    return true;
}

function show(){
    if (showLogin){
        document.getElementById('btnLogin').textContent = 'Login';
    } else {
        document.getElementById('btnLogin').textContent = 'Save';
    }
}

window.onload = function(){

    if (isLoged()) {
        window.location.href = '/';
    } else {

        show();

        document.getElementById('btnLogin')
            .addEventListener('click', () => {

                if (showLogin){
                    login();
                } 
            });


       
    }
}