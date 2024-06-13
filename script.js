document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        // Only toggle the menu if the screen width is 480px or less
        if (window.innerWidth <= 480) {
            navMenu.classList.toggle('show');
        }
    });
    
    // Ensure the menu is hidden when resizing from mobile to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            navMenu.classList.remove('show');
        }
    });

    // Optional: Hide the menu when a link is clicked
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth <= 480) {
            navMenu.classList.remove('show');
        }
    });
});
