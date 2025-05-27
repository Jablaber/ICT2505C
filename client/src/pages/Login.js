import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Tabs,
  Tab,
  Grid,
  CircularProgress,
  Alert,
} from '@mui/material';
import QRCode from 'qrcode.react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuth();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setLoginError('');
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    // Basic validation
    if (!email || !password) {
      setLoginError('Please fill in all fields');
      return;
    }

    try {
      // In a real application, you would validate credentials with the server
      // For now, we'll just simulate a successful login
      const userData = {
        email,
        name: 'Test User', // This would come from the server in a real app
      };
      await login(userData);
      navigate('/');
    } catch (err) {
      setLoginError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleQRLogin = async () => {
    try {
      // Handle QR code login logic here
      console.log('QR code login');
      // Simulate successful login
      const userData = {
        email: 'qr@example.com',
        name: 'QR User',
      };
      await login(userData);
      navigate('/');
    } catch (err) {
      setLoginError('QR login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Email Login" />
          <Tab label="QR Code Login" />
        </Tabs>

        {tabValue === 0 ? (
          <Box component="form" onSubmit={handleEmailLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  size="large"
                  disabled={isLoading}
                >
                  {isLoading ? <CircularProgress size={24} /> : 'Login'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" gutterBottom>
              Scan this QR code with your SingPass app
            </Typography>
            <Box sx={{ my: 2 }}>
              <QRCode value="dummy-singpass-qr-code" size={200} />
            </Box>
            <Button
              variant="contained"
              onClick={handleQRLogin}
              size="large"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Login with SingPass'}
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Login; 