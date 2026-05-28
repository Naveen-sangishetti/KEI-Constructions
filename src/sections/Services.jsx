import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants';
import styles from './Services.module.css';

export default function Services() {
  const containerRef = useRef(null);
  const rowsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  useEffect(() => {
    rowsRef.current.forEach((row, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      
      gsap.fromTo(row.querySelector(`.${styles.imageWrapper}`), 
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top bottom-=100",
            end: "center center",
            scrub: 1
          }
        }
      );

      gsap.fromTo(row.querySelector(`.${styles.textContent}`),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: row,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const services = [
    { title: "Living Spaces", img: ASSETS.services.living, desc: "Curated comfort for gathering." },
    { title: "Culinary Art", img: ASSETS.services.kitchen, desc: "Functional elegance in the kitchen." },
    { title: "Restful Retreats", img: ASSETS.services.bedroom, desc: "Serene sanctuaries for sleep." },
    { title: "Spa Bathrooms", img: ASSETS.services.bathroom, desc: "Daily rituals in refined stone." },
  ];

  return (
    <section ref={containerRef} className={styles.servicesSection}>
      <h2 className={styles.header}>Our Expertise</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} ref={addToRefs} className={styles.row}>
            <div className={`${styles.imageWrapper} ${i % 2 !== 0 ? styles.right : ''}`}>
              <img src={s.img} alt={s.title} />
            </div>
            <div className={`${styles.textContent} ${i % 2 !== 0 ? styles.left : ''}`}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
