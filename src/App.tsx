import React from 'react';
import { Container } from '@mui/material';
import VideoGalleryWrapper from './components/video-gallery-wrapper';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <VideoGalleryWrapper />
    </Container>
  );
};

export default App;
