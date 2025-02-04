document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert("@ is missing");
        return;
    }

    alert("login sucessfull");
    document.getElementById('loginform').reset();

    window.location.href="index.html";
});