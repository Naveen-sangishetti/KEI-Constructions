import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = PROJECTS.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <div className={styles.detailPage}>
      {/* Dynamic Lightbox */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Enlarged view" />
            <button className={styles.closeLightbox} onClick={() => setLightboxImage(null)}>×</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img src={project.coverImage} alt={project.title} className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <button className={styles.backLink} onClick={() => navigate('/projects')}>
            ← Back to All Projects
          </button>
          <div className={styles.heroMeta}>
            <span className={styles.categoryBadge}>{project.category}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.executedBy}>Executed by KEI CONSTRUCTIONS AND INTERIORS</p>
        </div>
      </section>

      <div className={styles.mainContent}>
        {/* Project Description Section */}
        <section className={styles.section}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.professionalText}>
              This project was executed by KEI CONSTRUCTIONS AND INTERIORS with a strong focus on structural integrity, premium materials, and detailed finishing. From construction phases to interior execution, every stage was handled with precision and strict quality control, resulting in a space that combines durability, functionality, and refined aesthetics.
            </p>
            <p className={styles.projectAbout}>
              {project.shortDescription} {project.location && `This project is located at ${project.location}.`}
            </p>
          </div>
        </section>

        {/* Media Showcase (Auto Loaded) */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Captures</h2>
            <p className={styles.sectionSubtitle}>A visual journey of construction and finishing</p>
          </div>
          
          <div className={styles.mediaGrid}>
            {/* Render all Images */}
            {project.images.map((img, index) => (
              <div 
                key={`img-${index}`} 
                className={styles.mediaItem}
                onClick={() => setLightboxImage(img)}
              >
                <div className={styles.imageOverlay}>
                  <span className={styles.zoomText}>VIEW PHOTO</span>
                </div>
                <img src={img} alt={`${project.title} ${index + 1}`} loading="lazy" />
              </div>
            ))}

            {/* Render all Videos */}
            {project.videos && project.videos.map((vid, index) => (
              <div key={`vid-${index}`} className={styles.videoItem}>
                <video 
                  controls 
                  muted 
                  preload="metadata"
                  className={styles.videoPlayer}
                  poster={project.coverImage}
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Satisfaction Section */}
        <div className={styles.servicesSatisfactionGrid}>
          <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>Services Provided</h2>
            <div className={styles.servicesChecklist}>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Construction</div>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Interior Design</div>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Structural Work</div>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Electrical</div>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Plumbing</div>
              <div className={styles.serviceItem}><span className={styles.check}>✔</span> Turnkey Execution</div>
            </div>
          </section>

          <section className={styles.satisfactionSection}>
            <h2 className={styles.sectionTitle}>Client Satisfaction</h2>
            <div className={styles.satisfactionBox}>
              <p className={styles.satisfactionText}>
                The client expressed great satisfaction with the quality of execution, timely completion, and overall craftsmanship delivered by KEI CONSTRUCTIONS AND INTERIORS.
              </p>
              <div className={styles.satisfactionAccent} />
            </div>
          </section>
        </div>

        <footer className={styles.detailFooter}>
          <button className={styles.footerBackBtn} onClick={() => navigate('/projects')}>
            ← Back to All Projects
          </button>
        </footer>
      </div>
    </div>
  );
}