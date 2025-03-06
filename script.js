function checkPassword() {
    const password = document.getElementById("password").value;
    const passwordBox = document.querySelector(".password-box");
    const content = document.getElementById("content");

    if (password === "05012007") {
        passwordBox.classList.add("fade-out");

        setTimeout(() => {
            passwordBox.style.display = "none";
            content.classList.remove("hidden");
            content.classList.add("fade-in");
        }, 1000);
    } else {
        alert("Incorrect Password! Try again.");
    }
}
