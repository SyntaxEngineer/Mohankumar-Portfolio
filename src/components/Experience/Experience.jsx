import React from 'react';
import styles from './Experience.module.css';

// Importing skill and company logos
import html from '../../assets/skills/s/html.png';
import css from '../../assets/skills/s/css.png';
import react from '../../assets/skills/s/react.png';
import sql from '../../assets/skills/s/sql.png';
import net from '../../assets/skills/s/asp.png';
import api from '../../assets/skills/s/api.png';
import cts from '../../assets/skills/cts.png';
import python from '../../assets/skills/s/python.png';
import git from '../../assets/skills/s/git.png';
import angular from '../../assets/skills/s/angular.png';


export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {/* Skills Section */}
                <div className={styles.skills}>
                    {[{ src: html, name: 'HTML' }, { src: css, name: 'CSS' }, { src: react, name: 'React' },
                      { src: sql, name: 'SQL Server' }, { src: net, name: '.Net' }, { src: api, name: 'REST API' },
                      {src: angular, name: 'Angular'}, {src: git, name:'Git'}, {src: python, name:'Python'}
                    ]
                      .map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.src} alt={skill.name} />
                            </div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                    
                </div>

                {/* Work History Section */}
                <ul className={styles.history}>
                    <li className={styles.historyItem}>
                        <img src={cts} alt="Cognizant" />
                        <div className={styles.historyItemDetails}>
                            <h3>Jr. Software Engineer, Cognizant</h3>
                            <p>Nov, 2023 - Present</p>
                            <ul className={styles.text}>
                            
                                <li>Redesigned a customer-facing React JS interface, boosting user engagement by 15% and reducing load time by 25% through responsive design and performance optimization.</li>
                                <li>Built and optimized RESTful APIs using ASP.NET Web API, enabling seamless data integration and improving system scalability for complex enterprise applications.</li>
                                <li>Customized SQL Server and Oracle configurations, reducing query response time by 20% and enhancing data-driven performance for mission-critical operations.</li>
                                <li>Led end-to-end deployment processes, validating fixes in staging and ensuring smooth, low-risk integrations into live production environments.</li>
                            

                            </ul>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <img src={cts} alt="Cognizant" />
                        <div className={styles.historyItemDetails}>
                            <h3>Software Engineer Trainee, Cognizant</h3>
                            <p>Nov, 2022 - Nov, 2023</p>
                            <ul className={styles.text}>
                                <li>Updated existing documents by replacing outdated links with relevant URLs.</li>
                                <li>Acquired knowledge of various healthcare regulations and guidelines.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};


