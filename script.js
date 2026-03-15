// Mouse event
const button = document.getElementById("hoverButton");
const message = document.getElementById("mouseMessage");

button.addEventListener("mouseenter", function() {
    message.textContent = 'Wow, its so warm';
}
);

button.addEventListener("mouseleave", function() {
    message.textContent = 'Wait...Come back';
}
);