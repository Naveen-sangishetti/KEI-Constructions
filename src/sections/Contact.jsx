import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.css';
import { CONTACT_INFO } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form fade-in animation
      gsap.from('.contact-form', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        }
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section ref={containerRef} className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2>Begin Your Journey</h2>
          <p className={styles.subtitle}>Let us transform your vision into a living reality</p>
          <p className={styles.responseTime}>We respond within 24 hours</p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          
          {/* Contact Form */}
          <div className={`${styles.formWrapper} contact-form`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Project Type *</label>
                  <select 
                    name="projectType" 
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Budget Range</label>
                  <select 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="under-10L">Under ₹10 Lakhs</option>
                    <option value="10L-25L">₹10-25 Lakhs</option>
                    <option value="25L-50L">₹25-50 Lakhs</option>
                    <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="above-1Cr">Above ₹1 Crore</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Timeline</label>
                  <select 
                    name="timeline" 
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 months)</option>
                    <option value="short">Short-term (3-6 months)</option>
                    <option value="medium">Medium-term (6-12 months)</option>
                    <option value="long">Long-term (1+ year)</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Tell us about your project *</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="5"
                  placeholder="Describe your vision, requirements, and any specific preferences..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Inquiry</span>
                <span className={styles.arrow}>→</span>
              </button>

              <p className={styles.privacy}>
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className={styles.sidebar}>
            
            {/* Stats */}
            <div className={`${styles.statsSection} stats-section`}>
              <div className={styles.stat}>
                <div className={`${styles.statNumber} stat-number`}>150</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statNumber} stat-number`}>12</div>
                <div className={styles.statLabel}>Awards Won</div>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statNumber} stat-number`}>98</div>
                <div className={styles.statLabel}>% Client Satisfaction</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "KEI CONSTRUCTIONS AND INTERIORS transformed our home into a masterpiece. The attention to detail and 
                understanding of our vision was exceptional."
              </p>
              <div className={styles.author}>
                <strong>Priya Sharma</strong>
                <span>Mumbai Residence</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <div className={styles.infoItem}>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className={styles.infoItem}>
                <strong>Phone</strong>
                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className={styles.infoItem}>
                <strong>Locations</strong>
                <p>{CONTACT_INFO.locations.join(' • ')}</p>
              </div>
              <div className={styles.infoItem}>
                <strong>Office Hours</strong>
                <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
