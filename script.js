// script.js
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444'; // Darker background when scrolled
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    }
});

