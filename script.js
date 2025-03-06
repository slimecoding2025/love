function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "05012007") {
        document.querySelector(".password-box").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".password-box").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
            document.getElementById("content").classList.add("fade-in");
        }, 1000);
    } else {
        alert("Incorrect Password!");
    }
}
