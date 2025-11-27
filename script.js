// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Contact form mailto functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = contactForm.querySelector('[name="email"]').value;
            const phone = contactForm.querySelector('[name="phone"]') ? contactForm.querySelector('[name="phone"]').value : '';
            const message = contactForm.querySelector('[name="message"]').value;
            
            // Create mailto link
            const recipient = 'iraddeborah01@gmail.com';
            const subject = encodeURIComponent('Contact Form Submission from ' + email);
            const body = encodeURIComponent(
                'Email: ' + email + '\n' +
                'Phone: ' + (phone || 'Not provided') + '\n\n' +
                'Message:\n' + message
            );
            
            const mailtoLink = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Optional: Clear form after submission
            setTimeout(function() {
                contactForm.reset();
            }, 500);
        });
    }
});
