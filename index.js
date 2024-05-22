let firstDivImg = document.querySelector('.img-block-images-1')

let firstImg = document.querySelector('.images-image-1')

let secondDivImg = document.querySelector('.img-block-images-2')

let secondImg = document.querySelector('.images-image-2')

let thirdDivImg = document.querySelector('.img-block-images-3')

let thirdImg = document.querySelector('.images-image-3')

let hiddenDivForFirstImg = document.querySelector('.img-block-images-1-text-inside')

let hiddenDivForSecondImg = document.querySelector('.img-block-images-2-text-inside')

let hiddenDivForThirdImg = document.querySelector('.img-block-images-3-text-inside')

firstDivImg.addEventListener('mouseenter', () => {
    hiddenDivForFirstImg.style.display = 'flex'
    firstImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
})

firstDivImg.addEventListener('mouseleave', () => {
    hiddenDivForFirstImg.style.display = 'none'
    firstImg.style.cssText = 'transform: scale(1); opacity: 1;'
})

secondDivImg.addEventListener('mouseenter', () => {
    hiddenDivForSecondImg.style.display = 'flex'
    secondImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
})

secondDivImg.addEventListener('mouseleave', () => {
    hiddenDivForSecondImg.style.display = 'none'
    secondImg.style.cssText = 'transform: scale(1); opacity: 1;'
})

thirdDivImg.addEventListener('mouseenter', () => {
    hiddenDivForThirdImg.style.display = 'flex'
    thirdImg.style.cssText = 'transform: scale(1.1); opacity: 0.4;'
})

thirdDivImg.addEventListener('mouseleave', () => {
    hiddenDivForThirdImg.style.display = 'none'
    thirdImg.style.cssText = 'transform: scale(1); opacity: 1;'
})

