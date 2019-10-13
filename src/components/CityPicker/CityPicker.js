import React, { useRef, useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Cities } from '../../constants';
import { fetchWeatherThunk } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    width: 170,
  },
}));

const CityPicker = () => {
  const inputLabelEl = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [currentCity, setCurrentCity] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setLabelWidth(inputLabelEl.current.offsetWidth);
  }, []);

  const handleSelectCity = event => {
    setCurrentCity(event.target.value);
    dispatch(fetchWeatherThunk(event.target.value));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabelEl}>
        Choose a city
      </InputLabel>
      <Select
        value={currentCity}
        onChange={handleSelectCity}
        labelWidth={labelWidth}
      >
        {Cities.map((city, index) => (
          <MenuItem value={city} key={index}>{city}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CityPicker;
