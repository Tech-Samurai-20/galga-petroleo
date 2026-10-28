document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > header.offsetHeight) {
            header.classList.add('header-hidden');
        } 
        else if (window.scrollY < lastScrollY) {
            header.classList.remove('header-hidden');
        }
        
        lastScrollY = window.scrollY;
    });
});