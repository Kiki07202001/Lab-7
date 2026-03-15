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

// FORM EVENTS

    const eventForm = document.getElementById("eventForm");
    const formMessage = document.getElementById("formMessage");

    eventForm.addEventListener("submit", function(event) {
        event.preventDefault();
        formMessage.textContent = 'Form submitted successfully!';
    });

// FOCUS EVENTS

    const focusInput = document.getElementById("focusInput");
    const focusMessage = document.getElementById("focusMessage");

    focusInput.addEventListener("focus", function() {
        focusMessage.textContent = 'Good to type!';
    });

    focusInput.addEventListener("blur", function() {
        focusMessage.textContent = 'Input field isnt selected.';
    });

    // DELEGATION EVENT

    const buttonContainer = document.getElementById("buttonContainer");
    const delegationMessage = document.getElementById("delegationMessage");

    buttonContainer.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        delegationMessage.textContent = event.target.textContent + ' has been selected. ';

        }

    });

});
