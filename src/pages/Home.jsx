import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Studio from '../sections/Studio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to logic
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element && window.lenis) {
          window.lenis.scrollTo(element);
        } else if (element) {
          element.scrollIntoView();
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    // Reveal animations
    const sections = ['#services', '#studio'];
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15rem' }}>
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="studio"><Studio /></div>
    </div>
  );
}
