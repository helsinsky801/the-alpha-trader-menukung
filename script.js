// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Popup Functions
function openLoginPopup() {
    alert('Fitur login akan segera hadir!');
}

function openSignalsPopup() {
    alert('Sinyal trading akan segera tersedia!');
}

function openTeamPopup() {
    alert('Halaman tim akan segera diluncurkan!');
}

// Form handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Simple member popup function
function showMemberInfo(memberName) {
    const members = {
        'awen': 'Chief Analyst - Forex Expert',
        'yongki': 'Crypto Specialist - Blockchain Expert',
        'deo': 'Market Strategist - Technical Analysis',
        'noven': 'Risk Manager - Portfolio Manager',
        'reno': 'Stock Analyst - Equity Research'
    };
    
    alert(`${memberName}: ${members[memberName.toLowerCase()]}`);
}
