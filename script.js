// JavaScript for adding interactivity
// JavaScript for counting button clicks

let clickCount = 0;

function countClicks() {
    clickCount += 1;
    const message = document.getElementById("message");
    message.textContent = `Button clicked ${clickCount} time${clickCount > 1 ? 's' : ''}.`;
    message.style.color = "#9b59b6";
    message.style.fontSize = "1.2rem";
}


function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Thank you for visiting my page!";
    message.style.color = "#9b59b6";
    message.style.fontSize = "1.2rem";
}
