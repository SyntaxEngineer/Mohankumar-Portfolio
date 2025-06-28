import { useState } from 'react';
import styles from './EndorsementForm.module.css';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function EndorsementForm() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 5,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment.length < 3) return;

    await addDoc(collection(db, 'endorsements'), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    setFormData({ name: '', comment: '', rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        placeholder="Your Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Your Feedback"
        value={formData.comment}
        onChange={e => setFormData({ ...formData, comment: e.target.value })}
        required
      />
      <select
        value={formData.rating}
        onChange={e => setFormData({ ...formData, rating: +e.target.value })}
      >
        {[5, 4, 3, 2, 1].map(star => (
          <option key={star} value={star}>{star} Star{star !== 1 && 's'}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
