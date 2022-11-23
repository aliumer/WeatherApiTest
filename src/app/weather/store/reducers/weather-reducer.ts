import * as fromActions from '../actions/weather-actions';

export interface WeatherState {
  city: string | null;
  forecast: any;
  error: string | null;
}

export const initialState: WeatherState = {
  city: null,
  forecast: null,
  error: null,
};

const groupByDate = (data) => {
  const groupByDate = data.list.reduce((group, forecast) => {
    forecast.Id = new Date(forecast.dt_txt).toDateString();
    const { Id } = forecast;
    group[Id] = group[Id] ?? [];
    group[Id].push(forecast);
    return group;
  }, {});
  return groupByDate;
};

export function WeatherReducer(
  currentState: WeatherState = initialState,
  action: fromActions.WeatherActions
): WeatherState {
  switch (action.type) {
    case fromActions.LOAD_FORECAST_SUCCESS:
      return {
        ...currentState,
        city: action.forecast.city.name,
        forecast: groupByDate(action.forecast),
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
        city: action.city,
        forecast: null,
      };
  }
}
