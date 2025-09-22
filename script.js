// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '☰';
mobileMenuToggle.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
    padding: 0.5rem;
`;

// Add mobile menu toggle to navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
    navbar.appendChild(mobileMenuToggle);
}

// Show/hide mobile menu toggle on resize
function handleResize() {
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'block';
    } else {
        mobileMenuToggle.style.display = 'none';
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('mobile-menu-open');
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// Mobile menu functionality
mobileMenuToggle.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-menu-open');
    }
});

// Add mobile menu styles
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-toggle {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 999;
        }
        
        .nav-menu.mobile-menu-open {
            left: 0;
        }
        
        .nav-menu .nav-link {
            margin: 1rem 0;
            font-size: 1.1rem;
        }
        
        .right-nav {
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
const animatedElements = document.querySelectorAll('.service-item, .client-item');
animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add hover effects to service cards
document.querySelectorAll('.service-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});


document.body.appendChild(scrollToTopButton);


// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('w--current');
        if (link.getAttribute('href') === `/${current}` || 
            (current === '' && link.getAttribute('href') === '/')) {
            link.classList.add('w--current');
        }
    });
});

// Add parallax effect to hero images
window.addEventListener('scroll', function() {
    const heroImages = document.querySelectorAll('.hero-image-one, .hero-image-two');
    heroImages.forEach(heroImage => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add smooth reveal animation for service cards
const serviceCards = document.querySelectorAll('.service-item');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    serviceObserver.observe(card);
});

// Add click effect to buttons
document.querySelectorAll('.button-link-hover').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add hover effects to client logos
document.querySelectorAll('.client-item').forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.1)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.opacity = '0.6';
        this.style.transform = 'scale(1)';
    });
});

// Add smooth scrolling to all internal links
document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('/#') || href === '/') {
            e.preventDefault();
            if (href === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(href.substring(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    });
});