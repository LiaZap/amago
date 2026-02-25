/**
 * Âmago Consultoria - Interactions & Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // Set Current Year in Footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const closeBtn = document.querySelector(".close-menu-btn");
  const menuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  mobileBtn.addEventListener("click", () => {
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Intersection Observer for scroll animations
  const triggerElements = document.querySelectorAll(
    ".fade-up, .fade-right, .fade-left",
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  triggerElements.forEach((element) => {
    observer.observe(element);
  });

  // WhatsApp Form Handler
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const text = `Olá, vim pelo site da Âmago. %0A%0A*Nome:* ${nome} %0A*Telefone:* ${telefone} %0A*Área de Interesse:* ${assunto} %0A*Mensagem:* ${mensagem}`;

    const whatsappNumber = "554499810875";
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  });
});
