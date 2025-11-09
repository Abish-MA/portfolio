/==================== toggle icon navbar ====================/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/==================== scroll sections active link ====================/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /==================== sticky navbar ====================/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /==================== remove toggle icon and navbar when click navbar link (scroll) ====================/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/==================== scroll reveal ====================/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/==================== EmailJS Integration ====================/
// Initialize EmailJS
emailjs.init({
    publicKey: "nSEU9oVZKQ9xZBxfU"
});

const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
const emailSubject = document.getElementById("emailSubject");
const messageOne = document.getElementById("message");

// Function to send email using EmailJS
function sendEmail() {
    const params = {
        from_name: fullName.value,
        from_email: email.value,
        mobile_number: mobileNumber.value,
        subject: emailSubject.value,
        message: messageOne.value
    };

    emailjs.send("service_oc2lm14", "template_g1gr84l", params)
        .then(function(response) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            form.reset();
        }, function(error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again later.",
                icon: "error"
            });
            console.error("EmailJS Error:", error);
        });
}

// Form submit handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});