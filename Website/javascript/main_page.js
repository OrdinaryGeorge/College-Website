const message = "Hey! I am George, this is my portfolio.";

document.addEventListener("DOMContentLoaded", function () {
    typeMessage();
});

let tmi = 0;

function typeMessage() {
    if (tmi < message.length) {
        document.getElementById("typing-message").innerHTML += message.charAt(tmi);
        tmi++;
        setTimeout(typeMessage, 80);
    }
}

var Project1 = false

document.addEventListener("scroll", () => {
    if (window.scrollY > 533 && Project1 === false) {
        fadeIn('project1');
        Project1 = true
    }
});