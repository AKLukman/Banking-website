document.getElementById('login-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const userPass = document.getElementById('user-pass').value;

    if (userEmail == 'abc@gmail.com' && userPass == '123456') {
        window.location.href = 'banking.html';
    }
})