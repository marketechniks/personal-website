document.addEventListener('DOMContentLoaded', function() {
    // Typed.js for dynamic hero text
    var typed = new Typed('#typed-output', {
        strings: [
            'Senior Software Engineer at Sage', 
            'Java & Spring Framework Expert', 
            'Full Stack Developer',
            'Technical Leader'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (placeholder - replace with actual form handling)
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
