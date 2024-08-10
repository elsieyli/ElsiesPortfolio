document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("hello-message");
    message.addEventListener("click", function() {
        alert("Hello, world!");
    });
});