document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('theme-toggle');
    var body = document.body;
    var header = document.querySelector('.header');
    // Check for saved theme in localStorage
    var savedTheme = localStorage.getItem('theme');
    // Apply the saved theme if any
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (header) {
            header.classList.add(savedTheme);
        }
    }
    // Check if both toggleButton and header exist before proceeding
    if (toggleButton && header) {
        toggleButton.addEventListener('click', function () {
            if (body.classList.contains('light-theme')) {
                // Switch to dark theme
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                header.classList.remove('light-theme');
                header.classList.add('dark-theme');
                // Save the theme to localStorage
                localStorage.setItem('theme', 'dark-theme');
            }
            else {
                // Switch to light theme
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                header.classList.remove('dark-theme');
                header.classList.add('light-theme');
                // Save the theme to localStorage
                localStorage.setItem('theme', 'light-theme');
            }
        });
    }
    else {
        if (!toggleButton) {
            console.error('Toggle button not found!');
        }
        if (!header) {
            console.error('Header element not found!');
        }
    }
});
