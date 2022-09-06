let introFirstLine = document.querySelector('.welcom-text .first');
let introSecondLine = document.querySelector('.welcom-text .second');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
   
    introFirstLine.style.left = (50 + (value * -0.3)) +"%"
    introSecondLine.style.left = (50 + (value * 0.3)) +"%"

    introFirstLine.style.opacity = 1 + value * -0.007;
    introSecondLine.style.opacity = 1 + value * -0.007;
})