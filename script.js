let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

/* Emailjs */

function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#textarea").value,
    };

    emailjs.send("service_z06z0k9", "template_k36mpng", templateParams)
        .then(() => {
            alert("Email sent!!");
        })
        .catch(() => {
            alert("Email not sent!!");
        });
}