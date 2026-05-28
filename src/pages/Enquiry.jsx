import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../constants';
import styles from './Enquiry.module.css';

export default function Enquiry() {

  return (
    <div className={styles.enquiryPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Get in Touch</h1>
          <p>Let's bring your vision to life</p>
        </header>

        <div className={styles.contactGrid}>
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaWhatsapp className={styles.icon} style={{ color: '#25D366' }} />
            <h3>WhatsApp</h3>
            <p>{CONTACT_INFO.whatsapp}</p>
          </a>

          {/* Email */}
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className={styles.contactCard}
          >
            <FaEnvelope className={styles.icon} style={{ color: '#EA4335' }} />
            <h3>Email</h3>
            <p>{CONTACT_INFO.email}</p>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className={styles.contactCard}
          >
            <FaPhone className={styles.icon} style={{ color: '#4285F4' }} />
            <h3>Phone</h3>
            <p>{CONTACT_INFO.phone}</p>
          </a>

          {/* Instagram */}
          <a 
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaInstagram className={styles.icon} style={{ color: '#E1306C' }} />
            <h3>Instagram</h3>
            <p>{CONTACT_INFO.instagramHandle}</p>
          </a>
        </div>

        {/* Locations */}
        <div className={styles.locations}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <p>{CONTACT_INFO.address}</p>
        </div>
      </div>
    </div>
  );
}
