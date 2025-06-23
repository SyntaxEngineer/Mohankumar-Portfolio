import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import me from '../../assets/hero/bg1.png';



export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi! I'm Mohan Kumar</h1>
                <span className={styles.description}> I'm a
                    <TypeAnimation sequence={[" Software Developer", 2000, " Full Stack Developer", 2000]}
                        speed={50} wrapper='span' repeat={Infinity} /*style={{ color: '#8A2BE2' }}*/ style={{ color: "#8A2BE2", fontWeight: "bold" }} />
                    {/* <p>
                        With 2 years of hands-on experience as a Full Stack Developer, I specialize in crafting robust 
                        and user-friendly web applications using React and .NET technologies. Let’s connect and explore 
                        how I can contribute to your vision!
                    </p> */}
                    <p>With 2 years of hands-on experience in full-stack development, I bring expertise in React and .NET technologies
                       to craft seamless, user-friendly applications. Whether it's designing frontends or optimizing backends, I'm here
                       to deliver innovative solutions. Let's connect and build something extraordinary together!
                    </p>
                </span>
                <div className={styles.btn}>
                    <a href='mailto:mohanprojectid@gmail.com' className={styles.contactBtn}>Contact me</a>
                    <a href='https://drive.google.com/file/d/1VCdPakT6fAE1JSua4xEio9g756bDWeBU/view?usp=sharing' target='_blank' rel="noopener noreferrer" className={styles.cvBtn}> My CV</a>
                </div>
            </div>
            <img src={me} alt='hero img' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    ); 
};
