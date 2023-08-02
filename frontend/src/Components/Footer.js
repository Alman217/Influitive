import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={socialMediaContainer}>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={socialIcon} />
        </a>
        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={socialIcon} />
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={socialIcon} />
        </a>
        <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={socialIcon} />
        </a>
      </div>
      <div style={infoContainer}>
        <p>&copy; {new Date().getFullYear()} Influitive. All rights reserved.</p>
        <p>123 Main Street, City, Country</p>
        <p>Email: info@yourwebsite.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '1rem',
  textAlign: 'center',
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const socialMediaContainer = {
  display: 'flex',
  gap: '1rem',
};

const socialIcon = {
  fontSize: '24px',
  color: '#555',
};

const infoContainer = {
  textAlign: 'left',
};

export default Footer;