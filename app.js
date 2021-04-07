const hamBtn = document.querySelector('.ham-toggle');
const navLinks = document.querySelector('ul.nav-links');

hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})