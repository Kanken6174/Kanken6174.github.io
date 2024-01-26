// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add dynamic behavior or animations as needed
// Example: Change header color on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');

    // Make the top bar sticky with background color change on scroll
    if (window.scrollY > header.clientHeight) {
        nav.style.backgroundColor = '#007bff';
    } else {
        nav.style.backgroundColor = '#333';
    }
});