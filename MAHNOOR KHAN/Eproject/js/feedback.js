document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;

    if (" @ is missing") {
        alert("feedback form submit.");
        event.preventDefault();
    }
});