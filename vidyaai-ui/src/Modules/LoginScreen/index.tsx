// src/LoginPage.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../../Assets/loginpage.jpg'; // Ensure you have an image named background.jpg in the src folder or change the path accordingly

const Root = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Container = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const LoginPage: React.FC = () => {
  const handleGoogleSignIn = () => {
    window.location.href = '/auth/google';
  };

  return (
    <Root>
      <Container>
        <Typography variant="h4" gutterBottom>
        Welcome to VIDYA AI
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      </Container>
    </Root>
  );
};

export default LoginPage;
