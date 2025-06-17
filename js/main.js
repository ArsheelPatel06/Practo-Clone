// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    // Add search logic here
    console.log('Searching for:', e.target.value);
});

// Service card functions
function startConsultation() {
    alert('Redirecting to video consultation...');
    // Add consultation logic here
}

function findDoctors() {
    alert('Finding doctors in your area...');
    // Add doctor search logic here
}

function exploreSurgeries() {
    alert('Exploring surgery options...');
    // Add surgeries logic here
}

// Mobile number validation for app download
document.querySelector('.get-app button').addEventListener('click', function() {
    const phoneInput = document.querySelector('.get-app input').value;
    if(/^\d{10}$/.test(phoneInput)) {
        alert('SMS sent successfully!');
    } else {
        alert('Please enter a valid 10-digit phone number');
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});