import { createHeader, initializeHeader } from "./components/header.js";
import { createContent, initializeContent } from "./components/content.js";
import { createFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${createHeader()}
    ${createContent()}
    ${createFooter()}
  `;

  initializeHeader();
  initializeContent();
});
// Add to your content.js or main JavaScript file
document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements on scroll
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  // Trigger once on load
  reveal();
});
