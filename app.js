const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const prova = document.querySelector('nav .mainMenu li');
const logo = document.querySelector('.logo');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    prova.style.marginLeft = '0';
    logo
}
function close() {
    mainMenu.style.top = '-100%';
    icone.style.top = '-100%';
}