const menu = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');
// alert(nav);

menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});