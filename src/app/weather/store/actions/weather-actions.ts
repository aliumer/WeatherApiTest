import { Action } from '@ngrx/store';

export const LOAD_FORECAST = '[Weather Page] Load Forecast';
export const LOAD_FORECAST_SUCCESS = '[Weather Page] Load Forecast Success';
export const LOAD_FORECAST_FAILURE = '[Weather Page] Load Forecast Failure';

export class LoadForecast implements Action {
  public readonly type = LOAD_FORECAST;
  constructor(public readonly city: string) {}
}

export class LoadForecastSuccess implements Action {
  public readonly type = LOAD_FORECAST_SUCCESS;
  constructor(public readonly forecast: any) {}
}

export class LoadForecastFailure implements Action {
  public readonly type = LOAD_FORECAST_FAILURE;
  constructor(public readonly error: string) {}
}

export type WeatherActions =
  | LoadForecast
  | LoadForecastSuccess
  | LoadForecastFailure;
