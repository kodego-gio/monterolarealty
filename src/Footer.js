import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a href="https://www.facebook.com/giovanni.monterola09/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/giovannimonterola09/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/giovanni-monterola/"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="company-details">
          <p>Monterola Realty</p>
          <p>3 Jerome, GM Building</p>
          <p>Davao City, Philippines 8000</p>
        </div>
        <div className="contact-numbers">
          <p>Phone: (123) 456-7890</p>
          <p>Email: giovanni.filipinohomes@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
