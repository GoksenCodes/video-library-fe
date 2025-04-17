import React from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Video Library
          </Typography>
          {/* Video grid will go here */}
        </Box>
      </Container>
    </>
  );
};

export default App;
