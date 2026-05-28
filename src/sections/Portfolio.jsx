import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Reveal real image over wireframe
    const projects = gsap.utils.toArray(`.${styles.project}`);
    
    projects.forEach(project => {
      const realImage = project.querySelector(`.${styles.realImage}`);
      
      gsap.fromTo(realImage,
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "center bottom",
            end: "center center",
            scrub: 1, 
            id: 'portfolio-reveal'
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.portfolioSection}>
      <h2 className={styles.header}>Selected Works</h2>
      
      <div className={styles.list}>
        {ASSETS.portfolio.map((p) => (
          <div key={p.id} className={`${styles.project} project`}>
            {/* Wireframe (Bottom Layer) */}
            <img src={p.wire} className={styles.wireImage} alt="Wireframe" />
            
             {/* Real (Top Layer) - Revealed via clip-path */}
            <img src={p.real} className={styles.realImage} alt="Real Construction" />
            
            <div className={styles.info}>
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

