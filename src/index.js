function toggle() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);