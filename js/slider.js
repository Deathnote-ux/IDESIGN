const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
let counter = 0;

showSlide();
function showSlide() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
    slider.style.transition = `transform 0.5s ease`;
    counter = counter + 1;
    
    if (counter === slide.length) {
        slider.style.transition = `none`;
        counter = 0;
    }
    
    setTimeout(showSlide, 3000);
};