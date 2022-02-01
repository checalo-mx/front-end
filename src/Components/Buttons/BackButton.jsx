import React from 'react';
import { Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const BackButton = () => {
  return <div>
          <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <ArrowBackIosNewIcon>ArrowBackIosNewIcon</ArrowBackIosNewIcon>
      </Grid>
    </Grid>

  </div>;
};

export default BackButton;
