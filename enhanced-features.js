// ============================================
// ENHANCED FEATURES - HUMANIST MODERNISM
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAllFeatures();
});

// ============================================
// MAIN INITIALIZATION
// ============================================
function initializeAllFeatures() {
    addBackToTopButton();
    addScrollProgressBar();
    enhanceNavigation();
    initializeFontSizeAdjuster();
    initializeTypographyComparison();
    initializeDesignerCards();
    initializeContactForm();
    initializeFAQ();
    addSmoothScrolling();
    addAnimationsOnScroll();
}

// ============================================
// 1. BACK TO TOP BUTTON
// ============================================
function addBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(button);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.background = 'var(--color-accent)';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.background = 'var(--color-primary)';
        button.style.transform = 'scale(1)';
    });
}

// ============================================
// 2. SCROLL PROGRESS BAR
// ============================================
function addScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// 3. ENHANCED NAVIGATION
// ============================================
function enhanceNavigation() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// 4. FONT SIZE ADJUSTER
// ============================================
function initializeFontSizeAdjuster() {
    const fontSizeInput = document.getElementById('font-size');
    const sampleText = document.getElementById('sample-text');
    const sizeValue = document.getElementById('size-value');
    
    if (fontSizeInput && sampleText && sizeValue) {
        fontSizeInput.addEventListener('input', (e) => {
            const size = e.target.value;
            sampleText.style.fontSize = size + 'px';
            sizeValue.textContent = size + 'px';
        });
    }
}

// ============================================
// 5. TYPOGRAPHY COMPARISON
// ============================================
function initializeTypographyComparison() {
    const compareSize = document.getElementById('compare-size');
    const humanistSample = document.getElementById('humanist-sample');
    const geometricSample = document.getElementById('geometric-sample');
    const sizeDisplay = document.getElementById('size-display');
    
    if (compareSize && humanistSample && geometricSample && sizeDisplay) {
        compareSize.addEventListener('input', (e) => {
            const size = e.target.value;
            humanistSample.style.fontSize = size + 'px';
            geometricSample.style.fontSize = size + 'px';
            sizeDisplay.textContent = size + 'px';
        });
    }
}

// ============================================
// 6. DESIGNER CARD FLIP
// ============================================
function initializeDesignerCards() {
    const cards = document.querySelectorAll('.designer-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.designer-card-inner');
            if (inner) {
                const currentRotation = inner.style.transform;
                if (currentRotation.includes('rotateY(180deg)')) {
                    inner.style.transform = 'rotateY(0deg)';
                } else {
                    inner.style.transform = 'rotateY(180deg)';
                }
            }
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ============================================
// 7. CONTACT FORM VALIDATION
// ============================================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const formStatus = document.getElementById('form-status');
    
    // Character counter
    if (messageInput && charCount) {
        messageInput.addEventListener('input', () => {
            const length = messageInput.value.length;
            charCount.textContent = length;
            
            if (length > 1000) {
                messageInput.value = messageInput.value.substring(0, 1000);
                charCount.textContent = '1000';
            }
        });
    }
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate
        if (!validateForm(nameInput, emailInput, subjectInput, messageInput)) {
            showFormStatus('Please fill in all fields correctly.', 'error');
            return;
        }
        
        // Show loading
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.disabled = true;
        
        // Simulate sending (replace with actual form submission)
        setTimeout(() => {
            showFormStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
            if (charCount) charCount.textContent = '0';
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
    
    function validateForm(name, email, subject, message) {
        if (!name.value.trim()) return false;
        if (!email.value.trim() || !isValidEmail(email.value)) return false;
        if (!subject.value) return false;
        if (!message.value.trim() || message.value.length < 10) return false;
        return true;
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showFormStatus(message, type) {
        if (!formStatus) return;
        
        formStatus.textContent = message;
        formStatus.className = 'form-status ' + type;
        formStatus.style.display = 'block';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// 8. FAQ ACCORDION
// ============================================
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        if (summary) {
            summary.addEventListener('click', () => {
                // Close other open items (optional)
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item) {
                //         otherItem.removeAttribute('open');
                //     }
                // });
            });
        }
    });
}

// ============================================
// 9. SMOOTH SCROLLING
// ============================================
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 10. ANIMATIONS ON SCROLL
// ============================================
function addAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.principle-card, .timeline-item, .designer-card, .resource-card, .demo-tool'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// 11. READING MODE (OPTIONAL FEATURE)
// ============================================
function addReadingMode() {
    const button = document.createElement('button');
    button.textContent = '📖 Reading Mode';
    button.className = 'reading-mode-toggle';
    button.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 12px 20px;
        background: white;
        border: 2px solid var(--color-primary);
        border-radius: 8px;
        cursor: pointer;
        z-index: 999;
        font-weight: 600;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(button);
    
    let readingMode = false;
    
    button.addEventListener('click', () => {
        readingMode = !readingMode;
        document.body.classList.toggle('reading-mode', readingMode);
        button.textContent = readingMode ? '👁️ Normal Mode' : '📖 Reading Mode';
        
        if (readingMode) {
            button.style.background = 'var(--color-primary)';
            button.style.color = 'white';
        } else {
            button.style.background = 'white';
            button.style.color = 'var(--color-text)';
        }
    });
}

// ============================================
// 12. MOBILE MENU TOGGLE (IF NEEDED)
// ============================================
function addMobileMenuToggle() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;
    
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.className = 'mobile-menu-toggle';
    menuButton.setAttribute('aria-label', 'Toggle menu');
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: var(--color-primary);
    `;
    
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.insertBefore(menuButton, nav);
    }
    
    // Show on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMobile(e) {
        if (e.matches) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
            nav.style.display = 'flex';
        }
    }
    
    mediaQuery.addListener(handleMobile);
    handleMobile(mediaQuery);
    
    menuButton.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
        }
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c Humanist Modernism - Enhanced Features Loaded ✓', 
    'background: #2C5F8D; color: white; padding: 10px; font-size: 14px; border-radius: 4px;');