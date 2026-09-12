// ================= LOGIN MODAL =================

function openLogin() {

    document.getElementById("loginModal").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display = "none";

}


// ================= LOGIN =================

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    if (email && password) {

        alert(
            "Login successful!\n\nBackend authentication will be connected later."
        );

        closeLogin();

    }

}


// ================= FEATURES SCROLL =================

function scrollToFeatures() {

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    const modal =
        document.getElementById("loginModal");

    if (event.target === modal) {

        closeLogin();

    }

};
