const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length//6
const container = document.querySelector('.container')

let activeSlideIndex = 1
const height = container.clientHeight

const savedStyleMainSlide = window.getComputedStyle(mainSlide).transition
const savedStyleSidebar = window.getComputedStyle(sidebar).transition

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
changeSlideBool(activeSlideIndex, false)


upBtn.addEventListener('click', () => {
    changeSlide(1)
})

downBtn.addEventListener('click', () => {
    changeSlide(-1)
})

function changeSlideBool(activeSlideIndex, animate) {
    if (animate) {
        mainSlide.style.transform = `translateY(-${(activeSlideIndex) * height}px)`
        sidebar.style.transform = `translateY(${(activeSlideIndex) * height}px)`
        return
    }
    mainSlide.style.transition = 'none'
    sidebar.style.transition = 'none'
    mainSlide.style.transform = `translateY(-${(activeSlideIndex) * height}px)`
    sidebar.style.transform = `translateY(${(activeSlideIndex) * height}px)`

    setTimeout(() => {
        mainSlide.style.transition = savedStyleMainSlide
        sidebar.style.transition = savedStyleSidebar
    }, 0)

}

function changeSlide(direction) {
    activeSlideIndex += direction //0 1 2 3 4 
    console.log('activeSlide:', activeSlideIndex, 'length: ', slidesCount)
    if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 1
        changeSlideBool(activeSlideIndex, false)
        setTimeout(() => {
            activeSlideIndex = 2
            changeSlideBool(activeSlideIndex, true)
        }, 0)
    }
    else if (activeSlideIndex < 0) {
        activeSlideIndex = 4
        changeSlideBool(activeSlideIndex, false)
        setTimeout(()=>{
            activeSlideIndex=3
            changeSlideBool(activeSlideIndex, true)
        }, 0)
    }

    else {
        changeSlideBool(activeSlideIndex, true)
    }
}