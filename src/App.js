import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import CityPicker from './components/CityPicker';
import WeatherCard from './components/WeatherCard';

const useStyles = makeStyles({
  root: {
    marginTop: '4rem',
  },
  title: {
    marginBottom: '2rem',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid container justify="center">
        <Typography variant="h2" className={classes.title}>
          Weather in Ukraine
        </Typography>
      </Grid>
      <CityPicker />
      <WeatherCard />
    </Grid>
  );
};


export default App;
