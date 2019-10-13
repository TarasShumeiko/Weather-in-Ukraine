import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: '1rem',
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    padding: 5,
    background: '#feba32',
    borderRadius: 5,
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
  },
  pos: {
    marginBottom: 12,
  },
});

const WeatherCard = () => {
  const classes = useStyles();
  const weather = useSelector(state => state.weather);

  return (
    <>
      {!!Object.keys(weather).length && <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            Weather for {weather.name}
          </Typography>
          <Grid container justify="space-around">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
            <Typography variant="h3" className={classes.temperature}>
              <b>{Math.round(weather.main.temp)}</b>°C
            </Typography>
          </Grid>
          <Typography variant="h6">
            {weather.weather[0].description}
          </Typography>
          <Typography variant="body2">
            Wind: {weather.wind.speed} m/s
          </Typography>
        </CardContent>
      </Card>}
    </>
  );
};

export default WeatherCard;
