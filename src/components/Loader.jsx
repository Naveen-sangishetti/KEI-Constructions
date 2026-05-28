import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { ASSETS } from '../constants';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.2 },
      { opacity: 1, scale: 1.2, duration: 2, ease: "power2.out" }
    )
    .to(logoRef.current, { scale: 1.5, opacity: 0, duration: 1, delay: 0.5, ease: "power2.in" })
    .to(containerRef.current, { height: 0, duration: 1, ease: "expo.inOut" });

  }, [onComplete]);

  return (
    <div ref={containerRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fdfbf7',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        width: 'min(500px, 80vw)',
        aspectRatio: '1/1',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          ref={logoRef}
          src={ASSETS.logo}
          alt="KEI Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
        />
      </div>
    </div>
  );
}
