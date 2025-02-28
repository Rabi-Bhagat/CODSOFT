window.onload = function () {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    // Attach event listener to the entire container for all button clicks
    container.addEventListener("click", function (e) {
        if (e.target.tagName === "INPUT") {
            handleButtonClick(e.target.value);
        }
    });

    function handleButtonClick(value) {
        if (value === "C") {
            erase(); // Clear the display
        } else if (value === "=") {
            calculate(); // Evaluate expression
        } else if (value === "⌫" || value === "%") {
            deleteLast(); // Handle backspace or percentage
        } else {
            entries(value); // Add input to display
        }
    }

    function entries(value) {
        if (input.value === "0" && value !== ".") {
            input.value = value; // Replace initial zero with first input
        } else if (value === "x") {
            input.value += "*"; // Convert 'x' to '*'
        } else {
            input.value += value;
        }
    }

    function calculate() {
        try {
            if (input.value.trim() === "" || input.value === ".") {
                alert("Please Enter a Mathematical Expression");
                return;
            }
            input.value = eval(input.value);
        } catch (error) {
            alert("Invalid Expression!");
            erase();
        }
    }

    function erase() {
        input.value = "";
    }

    function deleteLast() {
        input.value = input.value.slice(0, -1);
    }
};
