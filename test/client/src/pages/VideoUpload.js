import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

function VideoUpload() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = [
    'Select Test',
    'Read Instructions',
    'Record Video',
    'Upload Video',
  ];

  const testInstructions = {
    'Timed Up and Go': [
      'Sit in a chair with your back against the chair back',
      'On the command "go", stand up',
      'Walk forward 3 meters at your normal pace',
      'Turn around',
      'Walk back to the chair',
      'Sit down',
    ],
    'Five-times Sit to Stand': [
      'Sit in a chair with your back against the chair back',
      'Place your hands on your hips',
      'On the command "go", stand up completely',
      'Sit down completely',
      'Repeat this sequence 5 times',
    ],
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Timed Up and Go Test
                  </Typography>
                  <Typography variant="body2" paragraph>
                    This test assesses mobility, balance, walking ability, and fall risk.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    fullWidth
                  >
                    Select This Test
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Five-times Sit to Stand Test
                  </Typography>
                  <Typography variant="body2" paragraph>
                    This test assesses lower limb strength and functional mobility.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    fullWidth
                  >
                    Select This Test
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Test Instructions
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              {testInstructions['Timed Up and Go'].map((instruction, index) => (
                <Typography component="li" key={index} paragraph>
                  {instruction}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Record Your Video
            </Typography>
            <Typography paragraph>
              Please ensure:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Good lighting</Typography>
              <Typography component="li">Full body is visible</Typography>
              <Typography component="li">Camera is stable</Typography>
              <Typography component="li">Background is clear</Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 2 }}
            >
              Start Recording
            </Button>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Upload Your Video
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2 }}
            >
              Choose File
              <input
                type="file"
                hidden
                accept="video/*"
              />
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Video Upload
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default VideoUpload; 