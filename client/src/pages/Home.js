import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Patient Buddy
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          I'm your Buddy for your Health
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="body1" paragraph>
            Patient Buddy is a comprehensive web application designed to support patients with Parkinson's disease
            in monitoring their mobility and rehabilitation progress. The platform enables automated assessment
            of functional mobility tests through video analysis, providing valuable insights for both patients
            and healthcare providers.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <Box component="ul">
                  <Typography component="li">Automated mobility assessment</Typography>
                  <Typography component="li">Video-based test analysis</Typography>
                  <Typography component="li">Progress tracking</Typography>

                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Available Tests
                </Typography>
                <Box component="ul">
                  <Typography component="li">Timed Up and Go Test</Typography>
                  <Typography component="li">Five-times Sit to Stand Test</Typography>
                </Box>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/video-upload"
                  sx={{ mt: 2 }}
                >
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home; 