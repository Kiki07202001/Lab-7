document.addEventListener("DOMContentLoaded", function() {

    // MOUSE EVENT

    const button = document.getElementById("hoverButton");
    const mouseMessage = document.getElementById("mouseMessage");

    button.addEventListener("mouseenter", function() {
        mouseMessage.textContent = 'Wow, its so warm';
    });

    button.addEventListener("mouseleave", function() {
        mouseMessage.textContent = 'Wait... come back';
    });


    // KEYBOARD EVENT

    const input = document.getElementById("textInput");
    const keyMessage = document.getElementById("keyMessage");

    input.addEventListener("keydown", function(event) {
        keyMessage.textContent = 'Last key pressed: ' + event.key;
    });

});

