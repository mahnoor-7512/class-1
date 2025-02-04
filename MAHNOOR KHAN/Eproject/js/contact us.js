document.getElementById('contact us-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-status').innerHTML = `<p style="color: green;">Thank you for contacting us, ${name}! We'll get back to you soon.</p>`;
        document.getElementById('contact-form').reset(); 
    } else {
        document.getElementById('form-status').innerHTML = `<p style="color: red;">Please fill out all fields before submitting.</p>`;
    }
});
