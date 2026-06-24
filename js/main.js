function toggleMenu() {
    var toplink = document.querySelector('.toplink');
    var navLinks = document.querySelector('.nav-links');

    if (toplink.classList.contains('responsivce')) {
        toplink.classList.remove('responsive');
        navLinks.style.display = 'none';
    } else {
        toplink.classList.add('responsive');
        navLinks.style.display = 'flex';
    }
}