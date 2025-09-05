// js.js - Contact Form Functionality for B V Saketh Reddy Portfolio

// Initialize EmailJS with your Public Key
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("dtj9DIpuyplBvZ-wa"); // Your EmailJS public key
});

// Function to send email
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validate required fields
    if (!name || !email || !message) {
        alert("Please fill in all required fields (Name, Email, and Message).");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create template parameters
    let templateParams = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    // Show loading state
    const submitButton = document.querySelector("#contactForm button[type='submit']");
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    // Send email using EmailJS
    emailjs.send("service_em1zmyk", "template_c02j3jt", templateParams).then(
        function (response) {
            alert("✅ Thank you! Your message has been sent successfully.");
            document.getElementById("contactForm").reset(); // Clear form
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        },
        function (error) {
            alert("❌ Sorry, there was an error sending your message. Please try again or contact me directly at sakethreddydosa01yt@gmail.com");
            console.error("EmailJS Error:", error);
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    );
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});