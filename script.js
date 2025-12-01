function sendEmail() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#textarea").value.trim();

    if (!name || !email || !subject || !message) {
        showAlert("Lütfen tüm alanları doldurun.", "error");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert("Lütfen geçerli bir e-posta adresi girin.", "error");
        return;
    }

    const templateParams = { name, email, subject, message };

    emailjs.send("service_z06z0k9", "template_k36mpng", templateParams)
        .then(() => {
            showAlert("Mesaj başarıyla gönderildi!", "success");
        })
        .catch((error) => {
            console.error("Email gönderim hatası:", error);
            showAlert("Mesaj gönderilemedi. Lütfen tekrar deneyin.", "error");
        });
}

function showAlert(message, type) {
    const alertBox = $("#emailAlert");
    const alertMsg = $("#alertMsg");

    alertMsg.text(message);

    if (type === "success") {
        alertBox.css("background", "#d4edda");
        alertBox.css("border-left", "8px solid #28a745");
        alertMsg.css("color", "#155724");
    } else if (type === "error") {
        alertBox.css("background", "#f8d7da");
        alertBox.css("border-left", "8px solid #dc3545");
        alertMsg.css("color", "#721c24");
    }

    alertBox.addClass("show");
    alertBox.removeClass("hide");
    alertBox.addClass("showAlert");

    setTimeout(() => {
        alertBox.removeClass("show");
        alertBox.addClass("hide");
    }, 5000);
}

$(".close-btn").click(function () {
    $("#emailAlert").removeClass("show");
    $("#emailAlert").addClass("hide");
});
