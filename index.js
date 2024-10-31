let img = document.getElementById("img");
let password = document.getElementById("pass");

img.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        img.classList.remove("fa-eye"); // Remove eye icon
        img.classList.add("fa-eye-slash"); // Add eye-slash icon
    } else {
        password.type = "password";
        img.classList.remove("fa-eye-slash"); // Remove eye-slash icon
        img.classList.add("fa-eye"); // Add eye icon
    }
};
