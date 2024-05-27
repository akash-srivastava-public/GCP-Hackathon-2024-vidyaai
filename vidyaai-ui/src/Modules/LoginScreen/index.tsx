import { Typography, Button, Box } from '@mui/material';

const LoginPage = () => {

  const handleLogin = () => {
    window.location.href = '/auth/google';
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to VIDYAAI
      </Typography>
      <Button onClick={handleLogin} variant="contained" size="large">
        Signin with google!!
      </Button>
    </Box>
  );
};

export default LoginPage;
