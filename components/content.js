export const createContent = () => {
  const contentHTML = `
      <main>
        <section class="hero">
          <h1>Welcome to Spiritual Bliss</h1>
          <p>Find your inner peace and harmony</p>
          <button class="btn">Get Started</button>
        </section>
         <section id="about" class="about-background">
            <h2>About Us</h2>
            <div class="about-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! 
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
                    pariatur provident possimus veniam, ipsam debitis ducimus. Laborum alias
                    a id amet esse asperiores dolorem qui non numquam deleniti ab distinctio
                    dolore neque ipsam, suscipit blanditiis similique, aliquid nisi quas
                    voluptates! 
                </p>
            </div>
        </section>
         <section id="services" class="services-background">
          <h2 class="section-title">Our Services</h2>
           <div class="services-container">
          <div class="service-card">
            <i class="fas fa-meditation"></i>
            <h3>Meditation</h3>
            <p>Discover inner peace through guided meditation sessions.</p>
            <a href="#" class="btn-secondary">Learn More</a>
          </div>
          <div class="service-card">
            <i class="fas fa-pray"></i>
            <h3>Spiritual Guidance</h3>
            <p>Personal guidance for your spiritual journey.</p>
            <a href="#" class="btn-secondary">Learn More</a>
          </div>
          <div class="service-card">
            <i class="fas fa-om"></i>
            <h3>Yoga Classes</h3>
            <p>Connect mind, body, and spirit through yoga.</p>
            <a href="#" class="btn-secondary">Learn More</a>
          </div>
        </div>
        </section>
        <section id="contact" class="contact-background">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>123 Spiritual Street, Peace Valley</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+1 234 567 8900</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@spiritualbliss.com</p>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" id="name" required>
              <label for="name">Your Name</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" required>
              <label for="email">Your Email</label>
            </div>
            <div class="form-group">
              <textarea id="message" required></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </section>
      </main>
    `;
  return contentHTML;
};

export const initializeContent = () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    alert("Welcome to Spiritual Bliss!");
  });
};
