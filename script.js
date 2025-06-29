// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     // --- Mobile Menu Toggle ---
//     const navLinks = document.querySelector('.nav-links');
//     const mobileMenuButton = document.createElement('button');
//     mobileMenuButton.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//     `;
//     mobileMenuButton.classList.add('mobile-menu-toggle');

//     const nav = document.querySelector('.main-nav');
//     if (nav) {
//         nav.appendChild(mobileMenuButton);

//         const toggleMenu = () => {
//             navLinks.classList.toggle('active');
//         };

//         mobileMenuButton.addEventListener('click', toggleMenu);
//     }

//     // Add CSS for mobile menu
//     const style = document.createElement('style');
//     style.innerHTML = `
//         .mobile-menu-toggle {
//             display: none;
//             background: none;
//             border: none;
//             cursor: pointer;
//         }
//         .mobile-menu-toggle svg { width: 2rem; height: 2rem; color: var(--primary-dark); }

//         @media (max-width: 768px) {
//             .nav-links {
//                 display: none;
//                 flex-direction: column;
//                 position: absolute;
//                 top: 80px;
//                 left: 0;
//                 width: 100%;
//                 background-color: white;
//                 box-shadow: var(--shadow-md);
//                 padding: 20px;
//                 gap: 20px;
//             }
//             .nav-links.active { display: flex; }
//             .nav-buttons { display: none; } /* Hide buttons on mobile, or move them into the menu */
//             .mobile-menu-toggle { display: block; }
//         }
//     `;
//     document.head.appendChild(style);


//     // --- Form Validation ---
//     const forms = document.querySelectorAll('.auth-form');
//     forms.forEach(form => {
//         form.addEventListener('submit', (e) => {
//             let isValid = true;
//             const inputs = form.querySelectorAll('input[required]');
//             inputs.forEach(input => {
//                 if (!input.value) {
//                     isValid = false;
//                     input.style.borderColor = 'var(--error-red)';
//                 } else {
//                     input.style.borderColor = 'var(--border-color)';
//                 }
//             });
//             if (!isValid) {
//                 e.preventDefault();
//                 alert('Please fill out all required fields.');
//             }
//         });
//     });


//     // FAQ Accordion Logic
//     const faqItems = document.querySelectorAll('.faq-item');
//     faqItems.forEach(item => {
//         const question = item.querySelector('.faq-question');
//         question.addEventListener('click', () => {
//             // Close other active items
//             const currentlyActive = document.querySelector('.faq-item.active');
//             if (currentlyActive && currentlyActive !== item) {
//                 currentlyActive.classList.remove('active');
//             }
//             // Toggle the clicked item
//             item.classList.toggle('active');
//         });
//     });

//     // --- Add this to the end of your script.js file ---

//     // Intersection Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 // Reset transform for slide-up animations
//                 if (entry.target.classList.contains('slide-up-on-scroll')) {
//                     entry.target.style.transform = 'translateY(0)';
//                 }
//                 // We can unobserve after it has animated once
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1 // Trigger when 10% of the element is visible
//     });

//     const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
//     elementsToAnimate.forEach(el => observer.observe(el));
// });
document.addEventListener('DOMContentLoaded', () => {

    // --- Interactive Hero Logic ---
    const heroSection = document.querySelector('.hero-interactive');
    if (heroSection) {
        const studentBtn = document.getElementById('student-btn');
        const educatorBtn = document.getElementById('educator-btn');
        const slider = document.querySelector('.hero-toggle .slider');
        const heroTextContent = document.querySelector('.hero-text-content');
        const heroBackground = document.querySelector('.hero-background');

        const headlineEl = heroTextContent.querySelector('h1');
        const paragraphEl = heroTextContent.querySelector('p');
        const cta1 = document.getElementById('hero-cta-1');
        const cta2 = document.getElementById('hero-cta-2');

        const personas = {
            student: {
                headline: "Unlock Your Potential. Find Your Path.",
                paragraph: "Explore thousands of expert-led courses in a focused, community-driven environment built for deep learning.",
                cta1_text: "Explore Courses",
                cta1_link: "courses.html",
                cta2_text: "How it Works",
                cta2_link: "#",
                bg_image: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop')"
            },
            educator: {
                headline: "Build Your Empire. Share Your Passion.",
                paragraph: "Launch a thriving online academy with powerful tools, seamless payments, and a true partnership model.",
                cta1_text: "Start Your Academy",
                cta1_link: "register-teacher.html",
                cta2_text: "View Pricing",
                cta2_link: "pricing.html",
                bg_image: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop')"
            }
        };

        function switchPersona(persona) {
            const data = personas[persona];

            heroTextContent.classList.add('fade-out');

            setTimeout(() => {
                headlineEl.textContent = data.headline;
                paragraphEl.textContent = data.paragraph;
                cta1.textContent = data.cta1_text;
                cta1.href = data.cta1_link;
                cta2.textContent = data.cta2_text;
                cta2.href = data.cta2_link;
                heroBackground.style.backgroundImage = data.bg_image;
                heroTextContent.classList.remove('fade-out');
            }, 300);

            if (persona === 'student') {
                studentBtn.classList.add('active');
                educatorBtn.classList.remove('active');
                slider.style.transform = 'translateX(0)';
            } else {
                studentBtn.classList.remove('active');
                educatorBtn.classList.add('active');
                slider.style.transform = `translateX(${studentBtn.offsetWidth}px)`;
            }
        }

        // Initial setup
        slider.style.width = `${studentBtn.offsetWidth}px`;
        switchPersona('student');

        studentBtn.addEventListener('click', () => switchPersona('student'));
        educatorBtn.addEventListener('click', () => switchPersona('educator'));
    }


    // --- Animated Counter Logic ---
    const statsSection = document.querySelector('.stats-section');
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + "+";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    animateValue(counter, 0, target, 2000);
                });
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statObserver.observe(statsSection);
    }


    // --- General Scroll Animations ---
    // General Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';

                // Handle different slide animations
                if (entry.target.classList.contains('slide-up-on-scroll')) {
                    entry.target.style.transform = 'translateY(0)';
                }
                if (entry.target.classList.contains('slide-in-left')) {
                    entry.target.style.transform = 'translateX(0)'; /* ADD THIS */
                }
                if (entry.target.classList.contains('slide-in-right')) {
                    entry.target.style.transform = 'translateX(0)'; /* ADD THIS */
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    document.body.classList.add('js-ready'); 
});