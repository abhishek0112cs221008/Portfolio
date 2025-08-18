
// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const theme = body.getAttribute('data-theme');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                const categories = card.getAttribute('data-category').split(' ');
                if (categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Smooth scroll animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission (in real application, you'd send to server)
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#10b981';
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 2000);
    }, 1500);
});

// Download resume function
function downloadResume() {
    // Create a simple text resume content
    const resumeContent = `
ABHISHEK PATEL
Aspiring Software Developer

Contact Information:
Email: 0112cs221008@gmail.com
Phone: +91 8770321224
Address: Anand Nagar, Bhopal (MP), India
LinkedIn: linkedin.com/in/abhishek68/

CAREER OBJECTIVE:
Aspiring software developer with a focus on backend and full-stack development. 
Passionate about building scalable, real-world solutions through continuous learning and problem-solving.

EDUCATION:
• B-Tech in Computer Science & Engineering (2022-2026)
Bansal Institute of Science & Technology, Bhopal
CGPA: 8.45

• Class 12th (MP Board) - 91% (2021-2022)
Adarsh Narmada Higher Secondary School, Gangeo

• Class 10th (MP Board) - 94.75% (2019-2020)
Adarsh Narmada Higher Secondary School, Gangeo

TECHNICAL SKILLS:
• Programming Languages: Java
• Web Technologies: HTML, CSS, JavaScript, JSP, Servlets
• Concepts: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)
• Tools: Git, GitHub, Android Studio, VSCode, MySQL

PROJECTS:
1. KiddyKart – Online E-Commerce Platform
• Technologies: Java, JSP, Servlets, MySQL
• Features: User login, product browse, cart management, order placement, admin panel

2. Library Management System
• Technologies: Java, MySQL, JDBC
• Features: CLI-based system with user login/registration, book issue/return, history tracking

3. Expense Tracker App
• Technologies: Flutter, SQLite
• Features: Real-time balance updates, categorization, monthly/yearly insights, offline storage

CERTIFICATIONS:
• Java Basic - HackerRank
• Problem Solving (Basic) - HackerRank

ADDITIONAL INFORMATION:
• CoCubes Assessment Score: 518/800 (National Percentile: 72)
• DSA Practice: Solved 230+ problems on GeeksforGeeks and LeetCode
    `;
    
    // Create and download the file
    const element = document.createElement('a');
    const file = new Blob([resumeContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'Abhishek_Patel_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Typing effect for hero section (optional enhancement)
const heroSubtitle = document.querySelector('.hero .subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after hero animation
setTimeout(typeWriter, 1500);

// FAQ Chatbot Functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');
const typingIndicator = document.getElementById('typing-indicator');

// FAQ Database
const faqData = {
    // Education
    education: "I'm currently pursuing B-Tech in Computer Science & Engineering at Bansal Institute of Science & Technology, Bhopal with a CGPA of 8.45. I completed my Class 12th with 91% and Class 10th with 94.75% from Adarsh Narmada Higher Secondary School, Gangeo.",
    
    // Skills
    skills: "My technical skills include: Programming in Java, Web Technologies (HTML, CSS, JavaScript, JSP, Servlets), Database Management (MySQL), Development Tools (Git, GitHub, Android Studio, VS Code), Mobile Development (Flutter, SQLite), and strong foundation in Data Structures & Algorithms and Object-Oriented Programming.",
    
    // Projects
    projects: "I've worked on several projects: 1) KiddyKart - An e-commerce platform for kids using Java, JSP, Servlets & MySQL with features like user login, cart management, and admin panel. 2) Library Management System - CLI-based system using Java & MySQL with JDBC for user registration and book management. 3) Expense Tracker App - A Flutter app with SQLite for personal finance tracking with real-time updates and insights.",
    
    // Experience
    experience: "I have strong problem-solving experience with 230+ solved problems on GeeksforGeeks and LeetCode. I achieved a CoCubes Assessment score of 518/800 (72nd percentile) and hold certifications in Java Basic and Problem Solving from HackerRank.",
    
    // Contact
    contact: "You can reach me at: Email: 0112cs221008@gmail.com, Phone: +91 8770321224, LinkedIn: linkedin.com/in/abhishek68/, Address: Anand Nagar, Bhopal (MP), India",
    
    // Career objective
    career: "I'm an aspiring software developer with a focus on backend and full-stack development. I'm passionate about building scalable, real-world solutions through continuous learning and problem-solving.",
    
    // Certifications
    certifications: "I hold certifications from HackerRank: Java Basic certification covering Java fundamentals and programming concepts, and Problem Solving (Basic) certification covering algorithmic problem solving and data structures.",
    
    // Location
    location: "I'm based in Bhopal, Madhya Pradesh, India. Specifically in Anand Nagar area."
};

// Chatbot toggle
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) {
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Process and respond
    setTimeout(() => {
        hideTypingIndicator();
        const response = getResponse(message);
        addMessage(response, 'bot');
    }, Math.random() * 1000 + 500); // Random delay between 0.5-1.5s
}

// Event listeners for sending messages
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Show/hide typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Quick question function
function askQuestion(question) {
    chatbotInput.value = question;
    sendMessage();
}

// Response generation function
function getResponse(message) {
    const msg = message.toLowerCase();
    
    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! I'm here to answer questions about Abhishek Patel. What would you like to know about his skills, projects, education, or experience?";
    }
    
    // Education related
    if (msg.includes('education') || msg.includes('study') || msg.includes('college') || msg.includes('university') || msg.includes('degree') || msg.includes('btech') || msg.includes('cgpa')) {
        return faqData.education;
    }
    
    // Skills related
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('programming') || msg.includes('language') || msg.includes('java') || msg.includes('web') || msg.includes('technical')) {
        return faqData.skills;
    }
    
    // Projects related
    if (msg.includes('project') || msg.includes('work') || msg.includes('built') || msg.includes('developed') || msg.includes('kiddykart') || msg.includes('library') || msg.includes('expense')) {
        return faqData.projects;
    }
    
    // Experience related
    if (msg.includes('experience') || msg.includes('cocubes') || msg.includes('leetcode') || msg.includes('geeksforgeeks') || msg.includes('problem') || msg.includes('solve')) {
        return faqData.experience;
    }
    
    // Contact related
    if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach') || msg.includes('linkedin')) {
        return faqData.contact;
    }
    
    // Career related
    if (msg.includes('career') || msg.includes('objective') || msg.includes('goal') || msg.includes('aspir')) {
        return faqData.career;
    }
    
    // Certifications
    if (msg.includes('certification') || msg.includes('certificate') || msg.includes('hackerrank')) {
        return faqData.certifications;
    }
    
    // Location
    if (msg.includes('location') || msg.includes('where') || msg.includes('bhopal') || msg.includes('address')) {
        return faqData.location;
    }
    
    // About Abhishek
    if (msg.includes('about') || msg.includes('who') || msg.includes('abhishek')) {
        return `${faqData.career} Currently pursuing ${faqData.education.split('.')[0]}. Feel free to ask about specific areas like skills, projects, or experience!`;
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
        "I'd love to help! You can ask me about Abhishek's education, technical skills, projects, certifications, or contact information.",
        "I'm here to answer questions about Abhishek Patel. Try asking about his projects, skills, education background, or how to contact him.",
        "Feel free to ask me about Abhishek's technical expertise, academic background, project experience, or professional details!",
        "I can provide information about Abhishek's education, programming skills, project portfolio, certifications, or contact details. What interests you?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Make askQuestion globally available
window.askQuestion = askQuestion;