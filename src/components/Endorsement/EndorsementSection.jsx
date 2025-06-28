import { useState } from 'react';
import { EndorsementCarousel } from './EndorsementCarousel';
import { EndorsementForm } from './EndorsementForm';
import styles from './EndorsementSection.module.css';

export function EndorsementSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.section}>
      <EndorsementCarousel />
      {!showForm && (
        <button onClick={() => setShowForm(true)} className={styles.button}>
          Leave an Endorsement
        </button>
      )}
      {showForm && <EndorsementForm />}
    </section>
  );
}
