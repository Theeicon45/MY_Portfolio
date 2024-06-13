document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            navMenu.classList.remove('show');
        }
    });
});
