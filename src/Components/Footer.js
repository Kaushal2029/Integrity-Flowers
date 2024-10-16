import React from "react";
import "../assets/footer/footer.css";

function Footer() {
  return (
    <div className="subscribe-form-container">
      <div className="about-us">
        <h2>Why you'll love shopping with us!</h2>
        <p>
          Here at Integrity Flowers, we want every customer to have a great
          experience. We go out of our way to provide excellent customer service
          and ensure that you're happy when you order flowers online. In
          addition to offering beautiful flowers online and a wide selection of
          gifts for all occasions, we also make sure that your flowers are
          delivered as quickly as possible.
        </p>
      </div>
      <div className="containers">
        <div className="content">
          <div className="section-content">
            <div className="section-content-text">
              <h2>About Integrity Flowers</h2>
              <p>
                Welcome to Integrity Flowers, where every bloom tells a story of
                beauty, grace, and heartfelt sentiments. We're more than just a
                flower shop; we're your companions in celebrating life's most
                precious moments. With a passion for petals and a commitment to
                excellence, we handpick each stem to ensure every arrangement
                reflects the uniqueness of your occasion. Whether it's a joyful
                celebration, a token of appreciation, or a moment of solace, let
                us weave nature's delicate wonders into your life's tapestry.
                Explore our floral treasures and let us help you craft
                unforgettable memories, one blossom at a time.
              </p>
              <a href="#" className="read-more">
                Read more about us
              </a>
            </div>
            <div className="contact">
              <div className="contact-upper">
                <h2>Get in Touch</h2>
                <p>Contact Customer Service</p>
                <p>help@integrityflowers.co.uk</p>
                <p>+44 20 8123 7938 (International)</p>
              </div>
              <div className="social-media">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="section">
              <h2>Categories</h2>
              <ul>
                <li>Unique Treats</li>
                <li>Flowers</li>
                <li>Hampers</li>
                <li>Summer Blooms</li>
                <li>Plants</li>
              </ul>
            </div>
            <div className="section">
              <h2>More Categories</h2>
              <ul>
                <li>Letterbox Hampers</li>
                <li>Chocolate Bouquet</li>
                <li>Summer</li>
                <li>Birthday</li>
                <li>Anniversary</li>
                <li>Sympathy</li>
                <li>Just To Say</li>
              </ul>
            </div>
            <div className="section">
              <h2>Integrity Flowers</h2>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="payment">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-apple-pay"></i>
            <i class="fa-brands fa-google-pay"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-paypal"></i>
          </div>
          <div className="copyright">
            <p>
              &copy; Copyright Integrity Flowers All rights reserved. Designed
              and Developed by Infikey Technologies LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
