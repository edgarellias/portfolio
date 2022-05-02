const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu);


const menuClose = document.getElementById('menuAnchor')

function closeMenu() {
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
}
menuClose.addEventListener('click', closeMenu)
