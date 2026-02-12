document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    // --- Mobile Menu ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });

    // --- Scroll Animation (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- Scroll To Top ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.querySelector('button').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Testimonials Slider ---
    const testimonials = [
        {
            quote: "blueTrestle transformed our outdated website into a modern sales machine. Highly recommended!",
            author: "Sarah Jenkins",
            role: "CEO, TechStart",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            quote: "The team's attention to detail and design strategy is unmatched. They truly understand branding.",
            author: "Michael Chen",
            role: "Marketing Director, GreenLeaf",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            quote: "Professional, timely, and incredibly talented. Our mobile app launch was a huge success thanks to them.",
            author: "Emily Rodriguez",
            role: "Founder, FitLife",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    let currentIndex = 0;
    const clientImage = document.getElementById('t-image');
    const clientQuote = document.getElementById('t-quote');
    const clientAuthor = document.getElementById('t-author');
    const clientRole = document.getElementById('t-role');
    const dotsContainer = document.getElementById('t-dots');

    function updateTestimonial(index) {
        const t = testimonials[index];
        clientImage.src = t.image;
        clientImage.alt = t.author;
        clientQuote.textContent = `"${t.quote}"`;
        clientAuthor.textContent = t.author;
        clientRole.textContent = t.role;

        // Update dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    // Initialize dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateTestimonial(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });

    document.getElementById('t-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.getElementById('t-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic Validation
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        let hasError = false;

        // Reset errors (simple alert approach for now, or you can add error spans like in React)
        if (!name.trim()) hasError = true;
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) hasError = true;
        if (!message.trim()) hasError = true;

        if (hasError) {
            alert('Please fill in all fields correctly.');
            return;
        }

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    });
});