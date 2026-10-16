
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const hint = document.getElementById("hint");

let isOpen = false;

openBtn.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        envelope.classList.add("open");
        openBtn.textContent = "Close Your Letter 💗";
        hint.textContent = "A little message, just for you ♡";
    } else {
        envelope.classList.remove("open");
        openBtn.textContent = "Open Your Letter 💌";
        hint.textContent = "Click the button to reveal your message.";
    }
});
