import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { db } from '../../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import styles from './EndorsementCarousel.module.css';

export function EndorsementCarousel() {
  const [endorsements, setEndorsements] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'endorsements'),
      where('rating', '>=', 4),
      orderBy('createdAt', 'desc')
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setEndorsements(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsub();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <h2>What Others Say</h2>
      <Slider {...settings}>
        {endorsements.map((e, i) => (
          <div key={i} className={styles.card}>
            <p>"{e.comment}"</p>
            <h4>— {e.name} ({e.rating}★)</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}
