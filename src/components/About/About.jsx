import React from 'react'
import styles from './About.module.css';
import about from '../../assets/about/abt.png';
import ui from '../../assets/about/uiIcon.png';
import server from '../../assets/about/serverIcon.png';
import point from '../../assets/about/cursorIcon.png';
//import a1 from "../../assets/about/images.jfif";

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={about} alt='me with a laptop' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={ui} alt='UI' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I create responsive, user-focused web apps with React JS, HTML and CSS, emphasizing clean code, seamless functionality, and optimized performance.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={server} alt='server' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have practical experience in maintaining and managing backend systems, specializing in .NET Core, ASP.NET MVC, ASP.NET Web API, and SQL Server </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={point} alt='server' />
                        <div className={styles.aboutItemText}>
                            <h3>Passionate about AI & ML</h3>
                            <p>"Proficient in artificial intelligence with a strong foundation built through hands-on experience and industry-recognized certifications, ensuring innovative and efficient AI-driven solutions.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}