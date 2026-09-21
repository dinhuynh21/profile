document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('open');
    });

    const links = document.querySelectorAll('.site-nav a');
    links.forEach(a => {
        a.addEventListener('click', () => {
            siteNav.classList.remove('open');
        });
    });
});