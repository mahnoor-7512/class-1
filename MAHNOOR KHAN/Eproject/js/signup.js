document.getElementById('signupform').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirm password').value;


    if (!email.includes('@')) {
        alert("@ is missing");
        return;
    }
    if (password.length < 6) {
        alert("please put  strong password")
        return;
    }
    if (confirmpassword !== password) {
        alert('password does not match');
    }


    alert("signup sucessfull");
    document.getElementById('signupform').reset();

    window.location.href="index.html";
});