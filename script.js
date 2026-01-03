(function () {
    emailjs.init("mYG428tcVt7m-ldkI");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "SERVICE_ID",
        "template_mt8kzp1",
        this
    ).then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("status").innerHTML =
            "<span class='text-success'>Pesan berhasil dikirim! ✅</span>";
    }, function (error) {
        console.log("FAILED...", error);
        document.getElementById("status").innerHTML =
            "<span class='text-danger'>Gagal mengirim pesan ❌</span>";
    });
});
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

