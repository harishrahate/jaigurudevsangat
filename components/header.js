// header.js
export const createHeader = () => {
  const headerHTML = `
    <header class="main-header">
      <nav class="nav-container">
        <div class="logo">
          <a href="#home">Baba jaigurudev Sangat, Pune</a>
        </div>
        <button id="mobile-menu" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
  return headerHTML;
};

export const initializeHeader = () => {
  const header = document.querySelector(".main-header");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");
  const body = document.body;
  const headerHeight = 60; // Match this with your --header-height CSS variable
  let lastScroll = 0;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  body.appendChild(overlay);

  // Function to close menu
  const closeMenu = () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";

    const icon = mobileMenu.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  };

  // Toggle mobile menu
  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";

    const icon = mobileMenu.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeMenu);

  // Handle navigation clicks
  navLinksItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Remove active class from all links
      navLinksItems.forEach((item) => item.classList.remove("active"));
      // Add active class to clicked link
      link.classList.add("active");

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }

      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // Update active link on scroll
  const updateActiveLink = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - (headerHeight + 10);
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinksItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  // // Handle scroll events
  // window.addEventListener("scroll", () => {
  //   updateActiveLink();

  //   const currentScroll = window.pageYOffset;

  //   // Add/remove header background on scroll
  //   if (currentScroll > 50) {
  //     header.classList.add("header-scrolled");
  //   } else {
  //     header.classList.remove("header-scrolled");
  //   }

  //   // Hide/show header on scroll up/down
  //   if (currentScroll > lastScroll && currentScroll > headerHeight) {
  //     header.classList.add("header-hidden");
  //   } else {
  //     header.classList.remove("header-hidden");
  //   }

  //   lastScroll = currentScroll;
  // });

  // // Handle window resize
  // window.addEventListener("resize", () => {
  //   if (window.innerWidth >= 768) {
  //     closeMenu();
  //   }
  // });
};
