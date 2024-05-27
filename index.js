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
