import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../App.module.css'; // Reuse specialized styles or create new ones? Let's use inline/new module for speed.
// Using inline for specific gallery styles to avoid cluttering App.module.css too much or creating many files.
// Ideally would be Gallery.module.css

// Placeholders
const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616137466211-f939a420be63?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631679706909-1e44fb757851?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  const pageStyle = {
    padding: "10rem 2rem 5rem", // Top padding for fixed header
    minHeight: "100vh",
    backgroundColor: "#f5f0e6"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "4rem"
  };

  const titleStyle = {
    fontFamily: "var(--font-serif)",
    fontSize: "4rem",
    fontWeight: "300",
    color: "#2c2a26",
    marginBottom: "1rem"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "2rem",
    maxWidth: "1400px",
    margin: "0 auto"
  };

  return (
    <div style={pageStyle} ref={gridRef}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Masterpieces</h1>
        <p style={{ fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
          Curated Portfolio of Excellence
        </p>
      </header>

      <div style={gridStyle}>
        {images.map((src, i) => (
          <div key={i} className="gallery-item" style={{ overflow: 'hidden' }}>
            <img 
              src={src} 
              alt={`Project ${i + 1}`} 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
