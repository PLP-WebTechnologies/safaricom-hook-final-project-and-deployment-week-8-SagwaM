document.addEventListener("DOMContentLoaded", () => {
    // Responsive navigation menu
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  
    // Contact form validation
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
    });
  });
  