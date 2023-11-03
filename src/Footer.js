import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        {/* Social Media Icons */}
        <a href="https://www.facebook.com/giovanni.monterola09/"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/giovanni-monterola/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/giovannimonterola09/"><i className="fab fa-instagram"></i></a>
        {/* Add more social media links/icons as needed */}
      </div>
      <div className="footer-company">
        {/* Company Information */}
        <p>Monterola Realty</p>
        <p>3 Jerome St. Door 1 GM Building</p>
        <p>Davao City, Philippines 8000</p>
      </div>
      <div className="footer-contact">
        {/* Contact Information */}
        <p>Email: giovanni.filipinohomes@gmail.com</p>
        <p>Phone: 0930.940.4172</p>
      </div>
    </footer>
  );
}

export default Footer;
