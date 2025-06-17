const BASE_URL = 'https://your-api-endpoint.com';export const DoctorService = {    async searchDoctors(query) {        const response = await fetch(`${BASE_URL}/doctors?q=${query}`);        return response.json();    },    async bookAppointment(doctorId, date) {        const response = await fetch(`${BASE_URL}/appointments`, {            method: 'POST',            body: JSON.stringify({ doctorId, date })        });        return response.json();    }};

document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userIdentifier = document.getElementById('userIdentifier').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            const loginWithOTP = document.getElementById('loginWithOTP').checked;

            if (loginWithOTP) {
                // Handle OTP login
                sendOTP(userIdentifier);
            } else {
                // Handle password login
                handleLogin(userIdentifier, password, rememberMe);
            }
        });
    }

    // Register Form Handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const password = document.getElementById('createPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;

            handleRegistration(fullName, phoneNumber, password, agreeTerms);
        });
    }
});

function handleLogin(identifier, password, remember) {
    // In a real app, you would make an API call here
    console.log('Logging in with:', { identifier, password, remember });
    
    // For demo purposes
    alert('Login successful!');
    window.location.href = 'index.html';
}

function sendOTP(identifier) {
    // In a real app, you would make an API call to send OTP
    console.log('Sending OTP to:', identifier);
    alert('OTP sent successfully!');
}

function handleRegistration(name, phone, password, terms) {
    // In a real app, you would make an API call here
    console.log('Registering:', { name, phone, password, terms });
    
    // For demo purposes
    alert('Registration successful! Please verify your phone number.');
}