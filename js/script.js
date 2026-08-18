document.addEventListener('DOMContentLoaded', () => {
    //  Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        // Prevent scrolling when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    //  Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    //  Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    //  Experience Tabs Logic (Segmented Control)
    const segmentBtns = document.querySelectorAll('.segment-btn');
    const jobPanels = document.querySelectorAll('.job-panel');
    const segmentedPill = document.querySelector('.segmented-pill');
    
    if (segmentBtns.length > 0 && segmentedPill) {
        // Initialize pill width based on number of tabs
        segmentedPill.style.width = `calc(${100 / segmentBtns.length}% - 8px)`;
        
        segmentBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and panels
                segmentBtns.forEach(b => b.classList.remove('active'));
                jobPanels.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Move pill
                segmentedPill.style.transform = `translateX(calc(${index * 100}% + ${index * 8}px))`;
                
                // Add active class to corresponding panel
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
});

// Project Data
const projectData = {
    'quicksave': {
        title: 'QuickSave',
        description: 'A secure workspace application designed to organize daily tasks, store essential documents, and manage important web links efficiently.',
        images: [
            { src: 'assets/quicksave/quicksave-welcome.png', title: 'Welcome Interface', desc: 'A clean and inviting landing page that introduces users to the secure workspace.' },
            { src: 'assets/quicksave/quicksave-login.png', title: 'Authentication Portal', desc: 'A secure login gateway for returning users to access their personal dashboard.' },
            { src: 'assets/quicksave/quicksave-signup.png', title: 'Account Registration', desc: 'A streamlined registration form for new users to create their QuickSave account.' },
            { src: 'assets/quicksave/quicksave-home.png', title: 'Primary Dashboard', desc: 'The central hub providing immediate access to personal quotes, saved links, and task lists.' },
            { src: 'assets/quicksave/quicksave-links.png', title: 'Link Directory', desc: 'A dedicated and organized space for users to safely store and categorize important web URLs.' },
            { src: 'assets/quicksave/quicksave-quotes.png', title: 'Document Archive', desc: 'A feature designed to save, edit, and reference essential text snippets and quotes.' },
            { src: 'assets/quicksave/quicksave-todo.png', title: 'Task Manager', desc: 'An intuitive task tracking system that categorizes items into In Progress, Completed, and Past Due statuses.' },
            { src: 'assets/quicksave/quicksave-change-username.png', title: 'Profile Settings', desc: 'An account configuration interface allowing users to update their username securely.' },
            { src: 'assets/quicksave/quicksave-change-password.png', title: 'Security Settings', desc: 'A secure portal for users to modify and update their account passwords.' },
            { src: 'assets/quicksave/quicksave-delete-account.png', title: 'Account Deletion', desc: 'A specialized settings section for the permanent and secure deletion of an account.' }
        ]
    },
    'school-ticketing': {
        title: 'School Ticketing System',
        description: 'A comprehensive ticketing platform built for educational institutions to streamline IT support and facility service requests.',
        images: [
            { src: 'assets/school_ticketing_system/project-login.png', title: 'Secure Login', desc: 'The primary authentication interface for students, faculty, and system administrators.' },
            { src: 'assets/school_ticketing_system/project-register.png', title: 'User Registration', desc: 'An account creation module designed for new users of the school support portal.' },
            { src: 'assets/school_ticketing_system/project-dashboard-user.png', title: 'Student/Faculty Dashboard', desc: 'The main interface for standard users, displaying active support tickets and system announcements.' },
            { src: 'assets/school_ticketing_system/project-submit-ticket.png', title: 'Request Submission', desc: 'A structured form for users to submit new service requests, complete with department categorization and urgency levels.' },
            { src: 'assets/school_ticketing_system/project-my-tickets.png', title: 'Ticket Tracking', desc: 'A personalized view allowing users to monitor the real-time status and progress of their submitted requests.' },
            { src: 'assets/school_ticketing_system/project-submit-feedback.png', title: 'Quality Assurance', desc: 'An interface enabling users to provide ratings and constructive feedback on resolved service tickets.' },
            { src: 'assets/school_ticketing_system/project-admin-dashboard.png', title: 'Administrator Dashboard', desc: 'A centralized command center providing administrators with system-wide statistics and recent alerts.' },
            { src: 'assets/school_ticketing_system/project-admin-all-tickets.png', title: 'Ticket Management Console', desc: 'A comprehensive list of all organizational tickets, featuring advanced filtering and sorting capabilities.' },
            { src: 'assets/school_ticketing_system/project-admin-manage-ticket.png', title: 'Resolution Interface', desc: 'An administrative tool to update ticket statuses, assign personnel, and communicate directly with the requesting user.' },
            { src: 'assets/school_ticketing_system/project-admin-view-feedback.png', title: 'Feedback Analytics', desc: 'An administrative overview of user satisfaction ratings and comments on successfully closed tickets.' }
        ]
    },
    'instamarket': {
        title: 'InstaMarket (POS System)',
        desc: 'Processes customer transactions and manages grocery items through a simple desktop interface. Awarded Best in Project Presentation 2024. Features an easy-to-use checkout process and inventory management capabilities.',
        tech: ['Java', 'Desktop UI'],
        images: []
    }
};

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data || !data.images || data.images.length === 0) {
        alert("Presentation not available for this project yet.");
        return;
    }

    currentLightboxImages = data.images;
    openLightbox(0);
}

// Lightbox Functions
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(index) {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxIndex = index;
    const imgData = currentLightboxImages[index];
    const src = imgData.src || imgData;
    const title = imgData.title || '';
    const desc = imgData.desc || '';

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');

    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    
    // Show/hide navigation buttons if there's only 1 image
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');
    if (prevBtn) prevBtn.style.display = currentLightboxImages.length > 1 ? 'block' : 'none';
    if (nextBtn) nextBtn.style.display = currentLightboxImages.length > 1 ? 'block' : 'none';
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function changeLightboxImage(direction) {
    let newIndex = currentLightboxIndex + direction;
    
    // Loop around
    if (newIndex < 0) {
        newIndex = currentLightboxImages.length - 1;
    } else if (newIndex >= currentLightboxImages.length) {
        newIndex = 0;
    }
    
    openLightbox(newIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
}

// Close lightbox when clicking outside
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target == lightbox) {
        closeLightbox();
    }
}
