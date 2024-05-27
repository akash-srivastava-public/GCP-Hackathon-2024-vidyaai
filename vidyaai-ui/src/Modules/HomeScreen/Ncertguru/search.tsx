import { Box, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';

const SearchWidget: React.FC = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript('https://cloud.google.com/ai/gen-app-builder/client?hl=en_US')
      .then(() => {
        console.log('Google Cloud AI script loaded successfully');
      })
      .catch((err) => {
        console.error('Failed to load the Google Cloud AI script:', err);
      });
  }, []);

  const config = process.env.REACT_APP_CONFIG_ID+"";

  return (
    <Box sx={{ p: 4, maxWidth: '800px', margin: '10% auto' }}>
    <Typography variant="h5" gutterBottom>
      NCERT books, undoubtedly, are the best reference books available for JEE preparation. However, when asked if NCERT books are all that we need for the preparation, the answer is NO.
    </Typography>
    <Typography variant="body1" paragraph>
      We can say that NCERT textbooks are essential, but not completely sufficient, for JEE preparation. Though 60-70 % of the questions appearing in the JEE exams are directly from the NCERT textbooks, these books lack the types of questions and MCQs that are asked in the exam. The NCERT books do not comprise enough problems of JEE difficulty level, hence, students should make sure that they refer to books containing multiple-choice questions of higher difficulty levels. Students appearing for the JEE Mains and Advance should also practise and solve the previous years’ question papers as well as sample papers. Since time management plays an important role in the Joint Entrance Examination, students should also learn to strictly manage time. Students can get hands-on experience in solving the exam on time by attempting mock tests available online, at BYJU’S.
    </Typography>
    <Button id="searchWidgetTrigger"
      variant="contained"
      color="primary"
    >
      Open Search Widget
    </Button>
    <gen-search-widget configid={config} triggerid="searchWidgetTrigger"></gen-search-widget>
  </Box>
  );
};

export default SearchWidget;
