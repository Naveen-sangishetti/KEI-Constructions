import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';
import styles from './Hero.module.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video 
          src="/HOME PAGE VEDIO.mp4" 
          className={styles.heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.heroTitle}>KEI CONSTRUCTIONS AND INTERIORS</h1>
        </div>
        <p className={styles.heroSubtitle}>Building Legacies, Designing Masterpieces</p>
        <button className={styles.ctaButton} onClick={() => navigate('/projects')}>Explore Our Work</button>
      </div>
    </section>
  );
}
