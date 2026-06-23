function toggleMenu() {
    var toplink = document.querySelector('.toplink');
    if (toplink.className === 'toplink') {
        toplink.className += ' responsive';
    } else {
        toplink.className = 'toplink';
    }
}