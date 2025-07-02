import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Box, Typography, Fade } from '@mui/material';
import styles from './EndorsementCarousel.module.css';

export function EndorsementCarousel() {
  const [endorsements, setEndorsements] = useState([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'endorsements'),
      where('rating', '>=', 4),
      orderBy('createdAt', 'desc')
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setEndorsements(data);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!endorsements.length) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % endorsements.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [endorsements]);

  if (!endorsements.length) {
    return (
      <Box className={styles.carousel}>
        <Typography>No endorsements yet. Be the first to add one!</Typography>
      </Box>
    );
  }

  const index = current % endorsements.length;
  const { name, comment, rating, company } = endorsements[index];

  return (
    <Box className={styles.carousel}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        What Others Say:
      </Typography>

      <Fade in={fade} timeout={400}>
        <Box className={styles.card}>
          <p>"{comment}"</p>
          <h4>
            — {name}
            {company && ` from ${company}`} ({rating}★)
          </h4>
        </Box>
      </Fade>
    </Box>
  );
}
