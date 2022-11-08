(function (){
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.nav_menu_close');
    const bgMain = document.querySelector('.main_open');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
        bgMain.classList.add('main_open_menu');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        bgMain.classList.remove('main_open_menu');
    })
    bgMain.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        bgMain.classList.remove('main_open_menu');
    })
}());