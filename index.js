const display = document.getElementById('display');

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => { display.value = ""; }, 1000); // Clear after 1 second
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    let button;

    // Numbers (0-9) and decimal point
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    // Operators (+, -, *, /)
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    // Decimal point
    else if (key === '.') {
        appendToDisplay(key);
    }
    // Equals (Enter key)
    else if (key === 'Enter') {
        calculate();
    }
    // Clear (Backspace key)
    else if (key === 'Backspace') {
        clearDisplay();
    }

    // Find the button that matches the key pressed and highlight it
    document.querySelectorAll('button').forEach((btn) => {
        if (btn.textContent === key) {
            button = btn;
        }
    });

    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100); // Remove active state after a brief period
    }
});
