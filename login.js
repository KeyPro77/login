const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "m.walter@aon.at" or "abdullahkabalan09@gmail.com" && password === "Martin1970" or "160380AbD") {
        location.href = "https://keypro77.github.io/htmlctm";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "stay" && password === "high") {
        location.href = "https://keypro77.github.io/htmlctm";
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})
