export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = data => ({
  type: FETCH_WEATHER,
  payload: data,
});

export const fetchWeatherThunk = city => {
  return async dispatch => {
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=46a7f81c364006b2991c9adcb15fbaa1`);
    const data = await result.json();
    dispatch(fetchWeather(data));
  };
};
