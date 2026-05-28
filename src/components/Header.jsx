import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { CONTACT_INFO, ASSETS } from '../constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 100);
      
      // Auto-hide logic: hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigation = (targetId) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
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

  // Determine header color based on scroll and page
  const isDark = scrolled || !isHomePage;

  return (
    <>
      <header className={`${styles.header} ${isDark ? styles.dark : styles.light} ${visible ? styles.visible : styles.hidden} ${menuOpen ? styles.menuActive : ''}`}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => { 
            setMenuOpen(false); 
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}>
            <div className={styles.logoCircle}>
              <img src={ASSETS.logo} alt="KEI Logo" />
            </div>
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoTitle}>KEI CONSTRUCTIONS AND INTERIORS</span>
              <span className={styles.logoSubtitle}>Architecture • Interiors • Construction</span>
            </div>
          </div>

          {/* Right Section: Enquiry + Social Icons + Hamburger */}
          <div className={styles.rightSection}>
            {/* Enquiry Button */}
            <button 
              className={styles.enquiryBtn}
              onClick={() => { setMenuOpen(false); navigate('/enquiry'); }}
            >
              Enquiry
            </button>
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
            
            {/* Hamburger Menu Icon */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        
        <nav className={styles.menuNav}>
          <button onClick={() => handleNavigation('hero')}>
            <span className={styles.navNumber}>01</span> Home
          </button>
          <button onClick={() => handleNavigation('services')}>
            <span className={styles.navNumber}>02</span> Services
          </button>
          <button onClick={() => { setMenuOpen(false); navigate('/projects'); }}>
            <span className={styles.navNumber}>03</span> Projects
          </button>
          <button onClick={() => handleNavigation('studio')}>
            <span className={styles.navNumber}>04</span> Studio
          </button>
          <button onClick={() => { setMenuOpen(false); navigate('/enquiry'); }}>
            <span className={styles.navNumber}>05</span> Contact Us
          </button>
        </nav>

        <div className={styles.menuFooter}>
          <div className={styles.menuContact}>
            <p>{CONTACT_INFO.email}</p>
            <p>{CONTACT_INFO.phone}</p>
          </div>
          <div className={styles.menuSocials}>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${CONTACT_INFO.email}`}>Email</a>
          </div>
        </div>
      </div>
    </>
  );
}
