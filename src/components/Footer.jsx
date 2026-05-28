import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { CONTACT_INFO, ASSETS } from '../constants';
import styles from './Footer.module.css';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element && window.lenis) {
        window.lenis.scrollTo(element);
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaLabel}>LET'S CONNECT</p>
        <h2 className={styles.ctaHeading}>Start the conversation. Find the extraordinary</h2>
        <p className={styles.ctaSubtext}>To begin your journey to timeless living, reach out to us</p>
        <button className={styles.ctaButton} onClick={() => navigate('/enquiry')}>
          Contact Us
        </button>
      </div>

      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={styles.logoSection} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className={styles.footerLogoCircle}>
            <img src={ASSETS.logo} alt="KEI Logo" />
          </div>
          <h3 className={styles.footerLogoText}>KEI CONSTRUCTIONS AND INTERIORS</h3>
          <p>Architecture • Interiors • Construction</p>
        </div>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`}>
            <FaEnvelope />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className={styles.footerNav}>
          <button onClick={() => handleNavigation('hero')}>Home</button>
          <button onClick={() => handleNavigation('studio')}>About Us</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
          <button onClick={() => handleNavigation('services')}>Career</button>
          <button onClick={() => navigate('/enquiry')}>Contact Us</button>
        </nav>

        {/* Address */}
        <div className={styles.address}>
          <p>{CONTACT_INFO.address}</p>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>&copy; 2026 KEI CONSTRUCTIONS AND INTERIORS. All rights reserved.</p>
      </div>
    </footer>
  );
}
