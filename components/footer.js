export const createFooter = () => {
  const footerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@jaigurudevsangatpune.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Baba jaigurudev Sangat, Pune. All rights reserved.</p>
        </div>
      </footer>
    `;
  return footerHTML;
};
