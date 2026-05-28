import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants';
import styles from './Studio.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Philosophy Text Reveal
      gsap.from(".philosophy-text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-section",
          start: "top 70%",
        }
      });

      // Bio Image Parallax
      gsap.to(".portrait-img", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Process Steps Stagger
      // Process Steps Stagger
      gsap.fromTo(".process-step", 
        { y: 50, autoAlpha: 0 },
        {
          y: 0, 
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 90%", // Trigger earlier
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.studioSection}>
      
      {/* 1. Philosophy */}
      <div className={`${styles.block} philosophy-section`}>
        <div className={styles.philosophyContent}>
          <h2 className={styles.label}>The Philosophy</h2>
          <p className={`${styles.leadText} philosophy-text`}>
            "We believe that every space has a voice, and our role is to help it speak. 
            Inspired by nature, light, and silence, we craft environments that feel 
            both curated and comfortably lived-in."
          </p>
        </div>
      </div>

      {/* 2. The Designer */}
      <div className={`${styles.block} ${styles.bioBlock} bio-section`}>
        <div className={styles.bioImageWrapper}>
            <img src={ASSETS.studio.portrait} alt="Shanthi" className={`${styles.portrait} portrait-img`} />
        </div>
        <div className={styles.bioContent}>
          <h2 className={styles.label}>The Visionary</h2>
          <h3 className={styles.name}>Meet Shanthi</h3>
          <p>
            With over 13 years of experience in construction and luxury interior design, Shanthi, Founder of KEI CONSTRUCTIONS AND INTERIORS, brings a rare blend of structural expertise and creative vision to every project.
His work is driven by precision, quality craftsmanship, and a deep understanding of how thoughtfully built and beautifully designed spaces can enhance everyday living.
          </p>
        </div>
      </div>

      {/* 3. The Process */}
      <div className={`${styles.block} process-section`}>
        <h2 className={styles.label} style={{textAlign: 'center', marginBottom: '3rem'}}>Our Process</h2>
        <div className={styles.processGrid}>
          <div className={`${styles.processStep} process-step`}>
            <span className={styles.stepNum}>01</span>
            <h4>Discovery</h4>
            <p>We begin by deeply understanding your lifestyle, needs, and aspirations.</p>
          </div>
          <div className={`${styles.processStep} process-step`}>
            <span className={styles.stepNum}>02</span>
            <h4>Curation</h4>
            <p>Selecting exquisite materials, bespoke furniture, and harmonious palettes.</p>
          </div>
          <div className={`${styles.processStep} process-step`}>
            <span className={styles.stepNum}>03</span>
            <h4>Realization</h4>
            <p>Overseeing every detail of construction and installation to perfection.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
