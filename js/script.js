
const navigation = document.querySelector('.navigation')
const slideText = document.querySelector('.container_text-background')

navigation.style.left = `${slideText.offsetWidth - navigation.offsetWidth / 2}px`

window.addEventListener('resize', () => {
  navigation.style.left = `${slideText.offsetWidth - navigation.offsetWidth / 2}px`
})

const containerSlide = document.querySelector('.container_slide')
const containerImgSlide = document.querySelector('.container_img-slide')

const lengthSlide = document.querySelectorAll('.container_text-background').length

const navigationRight = document.querySelector('.navigation-right')
const navigationLeft = document.querySelector('.navigation-left')

let countSlide = 0

function slideContent(){
  countSlide += 1
  if (countSlide < lengthSlide) {
    containerSlide.style.cssText = `transform: translateY(${countSlide * -100}vh)`
    containerImgSlide.style.cssText = `transform: translateY(${-300 + countSlide * 100}vh)`
  } else{
    countSlide = 0
    containerSlide.style.cssText = `transform: translateY(${countSlide * -100}vh)`
    containerImgSlide.style.cssText = `transform: translateY(${-300 + countSlide * 100}vh)`
  }
}


navigationLeft.addEventListener('click', slideContent)
navigationRight.addEventListener('click', slideContent)