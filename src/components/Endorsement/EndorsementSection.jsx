import { useState } from 'react';
import { EndorsementCarousel } from './EndorsementCarousel';
import { EndorsementForm } from './EndorsementForm';
import {
  Box,
  Button,
  Modal,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './EndorsementSection.module.css';

export function EndorsementSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box className={styles.section}>
      <EndorsementCarousel />

      <Box textAlign="center" mt={2}>
        <Button
          onClick={() => setShowForm(true)}
          sx={{
            mt: 2,
            backgroundColor: '#1c2433',
            color: '#f0f0f0',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            borderRadius: '6px',
            padding: '0.5rem 1.2rem',
            textTransform: 'none',
            border: '1px solid #f0f0f0',
            '&:hover': {
              backgroundColor: '#2b3548',
              transform: 'translateY(-1px)'
            }
          }}
        >
          Leave an Endorsement
        </Button>
      </Box>

      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <Box
          sx={{
            backgroundColor: '#f7f7f7',
            p: 4,
            borderRadius: '12px',
            maxWidth: 500,
            width: '90%',
            mx: 'auto',
            mt: '10vh',
            boxShadow: 24,
            position: 'relative',
            outline: 'none'
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setShowForm(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#333'
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <EndorsementForm onSubmitSuccess={() => setShowForm(false)} />
        </Box>
      </Modal>
    </Box>
  );
}
