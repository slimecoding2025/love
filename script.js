function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "05012007";

    if (password === correctPassword) {
        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text"; // Show the password
    } else {
        passwordInput.type = "password"; // Hide the password
    }
}
