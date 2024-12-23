
let currentPage = 0;

function movePage(direction) {
    const pages = document.querySelector('.pages');
    const totalPages = document.querySelectorAll('.page').length;

    if (direction === 'next') {
        currentPage = (currentPage + 1) % totalPages;
    } else {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
    }

    pages.style.transform = `translateX(-${currentPage * 100}%)`;
}
// JavaScript to start the animation when the page loads
window.onload = function() {
    const slider = document.querySelector('.slider');
    slider.classList.add('animate');
};
