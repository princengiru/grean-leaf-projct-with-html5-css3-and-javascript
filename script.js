document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');
    const switchIcon = document.getElementById('switch-icon');
    
    // Check and apply dark mode from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        switchIcon.classList.replace('fa-sun', 'fa-moon');
        toggleButton.checked = true; // Ensure the toggle is in the correct state
    }

    // Page Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none';
        document.querySelectorAll('.fade-in').forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 2000);

    // Dark Mode Toggle
    toggleButton.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        // Change icon based on mode
        if (body.classList.contains('dark-mode')) {
            switchIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            switchIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    // Burger Menu Toggle
    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Smooth scroll to section
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('All fields are required!');
            e.preventDefault();
        }
    });
});
