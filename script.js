let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.projects__list');
    const totalSlides = document.querySelectorAll('.projects__item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
