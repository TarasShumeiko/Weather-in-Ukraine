import { FETCH_WEATHER } from './actions';

const INITIAL_STATE = {
  weather: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === FETCH_WEATHER) {
    return { weather: payload };
  } else {
    return state;
  }
};
