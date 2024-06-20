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


const btnProgramsIn01Section = document.querySelector('.main__section-text-inside-btn-block-button')


btnProgramsIn01Section.onpointerenter = () => {
    btnProgramsIn01Section.style.cssText = 'background-color: rgb(221 221 221); border: rgb(0 0 0) 2px solid;'
}

btnProgramsIn01Section.onpointerleave = () => {
    btnProgramsIn01Section.style.cssText = 'background-color: var(--main__section-text-inside-btn-block-button-background-color); border: var(--main__section-text-inside-btn-block-button-border-color) 2px solid';
}