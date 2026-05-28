import React from 'react';
import { ASSETS, CONTACT_INFO } from '../constants';
import styles from './AboutContact.module.css';

export default function AboutContact() {
  return (
    <section className={styles.container}>
      {/* About Section */}
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <h2>The Studio</h2>
          <p>
            KEI CONSTRUCTIONS AND INTERIORS is a boutique studio dedicated to the art of living.
            We believe that every space has a voice, and our role is to help it speak.
            Inspired by nature, light, and silence, we craft environments that feel
            both curated and comfortably lived-in.
          </p>
        </div>
      </div>

      {/* Contact / CTA */}
      <div className={styles.contactWrapper}>
        <div className={styles.contactContent}>
          <h2>Begin Your Journey</h2>
          <p>Let us transform your vision into a living reality.</p>
          <a href={`mailto:${CONTACT_INFO.email}`} className={styles.button}>Inquire Now</a>
          
          <div className={styles.footerInfo}>
             <p>{CONTACT_INFO.locations.join(' • ')}</p>
             <p>{CONTACT_INFO.instagramHandle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
