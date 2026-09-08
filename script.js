// ================= NAVBAR =================

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// ================= OPEN LOGIN =================

function openLogin() {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= PASSWORD SHOW/HIDE =================

function togglePassword() {

    const password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}


// ================= LOGIN =================

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        if (email === "" || password === "") {

            message.innerText =
                "Please fill all fields.";

            message.style.color = "red";

            return;
        }


        // Week 1 frontend-only demonstration
        message.innerText =
            "Login successful! Backend will be connected later.";

        message.style.color = "green";


        console.log("Email:", email);
        console.log("Password:", password);

    });


// ================= REGISTER =================

function showRegister() {

    alert(
        "Registration page will be added in the next phase."
    );

}