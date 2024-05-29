const fatherBlock = document.querySelector('.section__for-img-img-block')
let firstImg = document.querySelector('.images-image-1')
let secondImg = document.querySelector('.images-image-2')
let thirdImg = document.querySelector('.images-image-3')
let hidFirst = document.querySelector('.img-block-images-1-text-inside')
let hidSecond = document.querySelector('.img-block-images-2-text-inside')
let hidThird = document.querySelector('.img-block-images-3-text-inside')

fatherBlock.addEventListener('mouseover', function (e) {
    let target = e.target.classList
    if (target.contains('img-block-images-1-text-inside') || e.target.dataset.itemFirst) {
        hidFirst.style.opacity = 1;
        firstImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
    } else if (target.contains('img-block-images-2-text-inside')  || e.target.dataset.itemSecond) {
        hidSecond.style.opacity = 1;
        secondImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
    } else if (target.contains('img-block-images-3-text-inside')  || e.target.dataset.itemThird) {
        hidThird.style.opacity = 1;
        thirdImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
    }
})
fatherBlock.addEventListener('mouseout', function (e) {
    let target = e.target.classList
    if (target.contains('img-block-images-1-text-inside')) {
        hidFirst.style.opacity = 0;
        firstImg.style.cssText = 'transform: scale(1); opacity: 1;'
    } else if (target.contains('img-block-images-2-text-inside')) {
        hidSecond.style.opacity = 0;
        secondImg.style.cssText = 'transform: scale(1); opacity: 1;'
    } else if (target.contains('img-block-images-3-text-inside')) {
        hidThird.style.opacity = 0;
        thirdImg.style.cssText = 'transform: scale(1); opacity: 1;'
    }
})


// scroll to .section__for-img //
const jumpToSectionForImgButton = document.querySelector('.block-full-btn-bl')
const sectionForImg = document.querySelector('.section__for-img')
jumpToSectionForImgButton.onclick = () => {
    sectionForImg.scrollIntoView(true)
}

// scroll to .section__more-h2-underline //
const jumpToSectionmoreH2Underline = document.querySelector('.block-text-links:nth-of-type(2)')
const sectionMoreH2Underline = document.querySelector('.section__more-h2-underline')
jumpToSectionmoreH2Underline.addEventListener('click', (e) => {
    e.preventDefault()
    sectionMoreH2Underline.scrollIntoView(true)
})

const jumpToSectionmoreH2UnderlineAnother = document.querySelector('.simply-links-items:nth-of-type(5)')
jumpToSectionmoreH2UnderlineAnother.onclick = () => {
    sectionMoreH2Underline.scrollIntoView(true)
}

// scroll to .section__container-black-chief // 
const jumpToSectionContainerBlackChief = document.querySelector('.block-text-links:last-child')
const sectionContainerBlackChief = document.querySelector('.section__container-black-chief')
jumpToSectionContainerBlackChief.addEventListener('click', (e) => {
    e.preventDefault()
    const blackChiefSectionTopOffset = sectionContainerBlackChief.getBoundingClientRect().top + window.scrollY
    window.scrollTo(0, blackChiefSectionTopOffset)
})

// scroll to top page // 

const jumpToTopPage = document.querySelector('.section-half-fot-text-with-button-button')
jumpToTopPage.onclick = () => {
    window.scrollTo(0, 0)
}

const jumpToTopPageAnother = document.querySelector('.section__name-latest-articles-with-sections-section-who-have-img-title-text-and-btn')
jumpToTopPageAnother.addEventListener('click', (e) => {
    let eTarget = event.target.classList
    if (eTarget.contains('equivalent-section-who-have-btn-button')) {
        window.scrollTo(0, 0)
    }
})


