const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const prova = document.querySelector('nav .mainMenu li');
const logo = document.querySelector('.logo');
const prev = document.querySelector('.glider-prev');
const next = document.querySelector('.glider-next');

/*var span = document.getElementsByClassName('arrow');
var div = document.getElementsByClassName('img');
var larghezza = window.innerWidth;
var l = 0;



span[1].onclick = () => {
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-790px"; }
        if (l == 2) { i.style.left = "-1580px"; }
        if (l == 3) { i.style.left = "-2365px"; }
        if (l == 4) { i.style.left = "-3160px"; }
        if (l > 4) { l = 4; }
    }
}

span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-740px"; }
        if (l == 2) { i.style.left = "-1480px"; }
        if (l == 3) { i.style.left = "-2220px"; }
        if (l < 0) { l = 0; }
    }
}
*/
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
    prev.style.display = 'none';
    next.style.display = 'none';
}
function close() {
    mainMenu.style.top = '-1000px';
    prev.style.display = 'block';
    next.style.display = 'block';
    //icone.style.top = '-100%';
    //mainMenu.style.display = 'none';
    //icone.style.display = 'none';
}
