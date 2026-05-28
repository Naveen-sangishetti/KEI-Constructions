import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import styles from './Projects.module.css';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className={styles.projectsPage}>
      <header className={styles.header}>
        <div className={styles.headerAccent} />
        <h1 className={styles.title}>Our Projects</h1>
        <p className={styles.subtitle}>A legacy of structural excellence and refined interior craftsmanship</p>
      </header>
      
      <div className={styles.projectsGrid}>
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div className={styles.imageWrapper}>
              <img src={project.coverImage} alt={project.title} className={styles.projectImage} />
              <div className={styles.imageOverlay}>
                <span className={styles.viewLabel}>View Case Study</span>
              </div>
            </div>
            
            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
              <p className={styles.projectDescription}>{project.shortDescription}</p>
              <button 
                className={styles.viewMoreBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/projects/${project.id}`);
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
