import React from 'react';
import styles from './ProjectCard.module.css';

// Statically import all your images
import imgCrud from '../../assets/projects/crud.png';
import imgPortfolio from '../../assets/projects/portfolio.png';
import imgP from '../../assets/projects/project.png'; // example

// Map filenames to their imports
const imageMap = {
  
  'project.png': imgP,
  'portfolio.png': imgPortfolio,
  'crud.png': imgCrud
  
};

export const ProjectCard = ({
  project: { title, description, skills, imageSrc, demo, source },
}) => {
  const resolvedImage = imageMap[imageSrc.split('/').pop()]; // gets the filename only
  return (
    <div className={styles.container}>
      <img src={resolvedImage} alt={`pic of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      {/* Optional links */}
      {/* <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div> */}
    </div>
  );
};
