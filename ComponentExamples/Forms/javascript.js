    document.addEventListener('DOMContentLoaded', () => {
        const htmlElement = document.documentElement;
        const themeLightBtn = document.getElementById('theme-light');
        const themeDarkBtn = document.getElementById('theme-dark');
        const themeAutoBtn = document.getElementById('theme-auto');

        // Function to set the theme
        const setTheme = (theme) => {
            htmlElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('bs-theme', theme);
        };

        // Load saved theme preference
        const savedTheme = localStorage.getItem('bs-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // If no saved theme, apply 'auto' by default
            setTheme('auto');
        }

        // Event listeners for theme buttons
        if (themeLightBtn) {
            themeLightBtn.addEventListener('click', () => setTheme('light'));
        }
        if (themeDarkBtn) {
            themeDarkBtn.addEventListener('click', () => setTheme('dark'));
        }
        if (themeAutoBtn) {
            themeAutoBtn.addEventListener('click', () => setTheme('auto'));
        }
    });