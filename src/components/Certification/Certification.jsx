import React from "react";
import styles from './Certification.module.css';
import az204 from '../../assets/certification/az204.png';
import az104 from '../../assets/certification/az104.png';
import ai102 from '../../assets/certification/ai 102.png';
export const Certification = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Certification</h2>
            <p className={styles.content}>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/MohanKumarJ-9086/162FD36E488D7536?sharingId=CCF015EE65D85F1A" target="_blank" rel="noopener noreferrer">
                    <img className={styles.AD} src={az204} alt="Azure developer associate" />
                </a>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/MohanKumarJ-9086/162FD36E488D7536?sharingId=CCF015EE65D85F1A" target="_blank" rel="noopener noreferrer">
                    <img className={styles.AA} src={az104} alt="Azure Administrator associate" />
                </a>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/MohanKumarJ-9086/1F829E7C5F585960?sharingId=CCF015EE65D85F1A" target="_blank" rel="noopener noreferrer">
                    <img className={styles.AI} src={ai102} alt="Azure AI associate" />
                </a>
            </p>
        </section>
    )
}