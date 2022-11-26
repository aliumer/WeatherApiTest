import { ForecastModel } from '../../models/weather.models';
import * as fromActions from '../actions/weather-actions';

export interface WeatherState {
  forecast: ForecastModel;
  error: string;
}

export const initialState: WeatherState = {
  forecast: null,
  error: null,
};

const getForecastByDate = (weather): ForecastModel => {
  const forecastByDate = weather.list.reduce((group, listItem) => {
    listItem.Id = new Date(listItem.dt_txt).toDateString();
    const { Id } = listItem;
    group[Id] = group[Id] ?? [];
    group[Id].push(listItem);
    return group;
  }, {});
  return { city: weather.city, forecast: forecastByDate };
};

export function WeatherReducer(
  currentState: WeatherState = initialState,
  action: fromActions.WeatherActions
): WeatherState {
  switch (action.type) {
    case fromActions.LOAD_FORECAST_SUCCESS:
      return {
        ...currentState,
        forecast: getForecastByDate(action.weather),
        error: null,
      };
    case fromActions.LOAD_FORECAST_FAILURE:
      return {
        ...currentState,
        error: action.error,
        forecast: null,
      };
    case fromActions.LOAD_FORECAST:
      return {
        ...currentState,
      };
  }
}
