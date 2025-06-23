import React from 'react';
import mail from '../../assets/contact/gmail.png';
import github from '../../assets/contact/github.png';
import linkdin from '../../assets/contact/linkedin.png';
import styles from './Contacts.module.css';

export const Contacts = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacts</h2>
                <p>Feel free  for a cool chat </p>

            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={mail} alt="Email icon" />
                    <a href="mailto:mohanprojectid@gmail.com">Mohan-kumar@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={linkdin}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/mohan-kumar-sde/">linkedin.com/Mohan-kumar</a>
                </li>
                <li className={styles.link}>
                    <img src={github} alt="Github icon" />
                    <a href="https://github.com/invisible-matrix">github.com/Mohan-kumar</a>
                </li>
            </ul>
        </footer>
    )
}
