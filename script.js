const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.getElementById("github-btn").addEventListener("click", function() {
    window.open("https://github.com/miicheelll", "_blank");
});

document.getElementById("github-icon").addEventListener("click", function() {
    window.open("https://github.com/miicheelll", "_blank");
});

document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/michelle-dorani15/", "_blank");
});

document.getElementById("presapp").addEventListener("click", function() {
    window.open("https://github.com/miicheelll/PresApp", "_blank");
});

document.getElementById("sibeta").addEventListener("click", function() {
    window.open("https://github.com/miicheelll/Si-Beta", "_blank");
});

document.getElementById("kelanews").addEventListener("click", function() {
    window.open("https://github.com/miicheelll/KELANews", "_blank");
});

document.getElementById("sistemkantin").addEventListener("click", function() {
    window.open("https://github.com/miicheelll/Sistem-Kantin", "_blank");
});

document.getElementById("sertif").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "doc/sertif.pdf"; 
    link.download = "Sertificate_Junior_Web_Developer.pdf"; 
    link.click(); 
});

document.getElementById("submit").addEventListener("click", function() {
    const message = document.getElementById("email").value.trim();

    if (message === "") {
      alert("Please enter a message before submitting!");
      return;
    }

    const recipient = "doranimichelle@gmail.com";
    const subject = encodeURIComponent("Message from Portfolio");
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});