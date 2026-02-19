let secondsOnSite = 0;
const timeDisplay = document.getElementById('time-display');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');






setInterval(() => {
    secondsOnSite += 1;
    timeDisplay.textContent = secondsOnSite;
}, 1000);

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});