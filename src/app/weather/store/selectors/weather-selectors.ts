import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../reducers/weather-reducer';

const getWeatherFeatureState = createFeatureSelector<WeatherState>('weather');

export const getForecast = createSelector(
  getWeatherFeatureState,
  (state: WeatherState) => {
    return state?.hasOwnProperty('forecast') ? state.forecast : '';
  }
);

export const getForecastError = createSelector(
  getWeatherFeatureState,
  (state: WeatherState) => {
    return state?.hasOwnProperty('error') ? state.error : '';
  }
);
