/*
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants';
import styles from './Materials.module.css';

export default function Materials() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      gsap.to(img, {
        scale: 1.2,
        y: -50,
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
  }, []);

  const materials = [
    { name: 'Walnut', img: ASSETS.materials.walnut },
    { name: 'Pure Linen', img: ASSETS.materials.linen },
    { name: 'Carrara Marble', img: ASSETS.materials.marble },
  ];

  return (
    <section ref={containerRef} className={styles.materialsSection}>
      <h2 className={styles.header}>Materiality</h2>
      <div className={styles.gallery}>
        {materials.map((m, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.mask}>
              <img ref={addToRefs} src={m.img} alt={m.name} />
            </div>
            <p className={styles.label}>{m.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
*/
