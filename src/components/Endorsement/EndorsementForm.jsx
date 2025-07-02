import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Box, TextField, Button, MenuItem } from '@mui/material';
import styles from './EndorsementForm.module.css'; // Assuming you have styles defined

export function EndorsementForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 5,
    company: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment.length < 3) return;

    await addDoc(collection(db, 'endorsements'), {
      ...formData,
      createdAt: serverTimestamp()
    });

    setFormData({ name: '', comment: '', rating: 5 });

    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <Box
      component="form"
      className={styles.form}
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <TextField
        label="Company Name"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        required
      />

      <TextField
        label="Your Feedback"
        multiline
        rows={4}
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        required
      />
      <TextField
        select
        label="Rating"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: +e.target.value })}
        required
      >
        {[5, 4, 3, 2, 1].map((star) => (
          <MenuItem key={star} value={star}>
            {star} Star{star > 1 && 's'}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="success"   disabled={
        !formData.name.trim() ||
        !formData.company.trim() ||
        !formData.comment.trim() ||
        !formData.rating
      }
      >
        Submit
      </Button>
    </Box>
  );
}


