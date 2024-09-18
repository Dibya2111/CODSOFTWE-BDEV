document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    window.alert("Message Submitted Successfully to DJ");
    setTimeout(function() {
        window.location.reload();
    }, 100);
});