document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("input[type='text']");
    const buttons = document.querySelectorAll(".keypad button");
    const clearButton = document.getElementById("clear");
    const submitButton = document.getElementById("submit");
    buttons.forEach(button => {
        if (button !== clearButton && button !== submitButton) {
            button.addEventListener("click", () => {
                inputField.value += button.textContent;
            });
        }
    });
    clearButton.addEventListener("click", () => {
        inputField.value = "";
    });
    submitButton.addEventListener("click", () => {
        const value = inputField.value.trim();
        if (value === "0704") {
            toastr.success("yown kala ko FO na tayo HAHAHAHA");
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }, 1000);
        } else {
            toastr.error("awts bobo mo talaga Jade");
        }
        inputField.value = ""; // Automatically clear the input field
    });
});
