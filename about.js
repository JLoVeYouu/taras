const burgerBtn = document.querySelector('.section-nav-btn')
const sectionMain = document.querySelector('.section__main-content')
const burgerMenu = document.querySelector('.for__burger-menu')
let isBurgerMenuOpen = false

function burgerMenuClick() {
    if (isBurgerMenuOpen) {
        document.documentElement.style.cssText = '';
        burgerMenu.style.display = 'none'
        sectionMain.hidden = false
    } else {
        document.documentElement.style.cssText = 'overflow-y: hidden';
        burgerMenu.style.display = 'flex'
        sectionMain.hidden = true
    }
    isBurgerMenuOpen = !isBurgerMenuOpen
}

burgerBtn.addEventListener('click', burgerMenuClick)

function resizeWindow() {
    const pageWidth = window.innerWidth
    if (pageWidth > 991 && isBurgerMenuOpen) {
        document.documentElement.style.cssText = '';
        burgerMenu.style.display = 'none'
        sectionMain.hidden = false
    }
}
window.addEventListener('resize', resizeWindow)