const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function showRegister() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
}

function showLogin() {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}