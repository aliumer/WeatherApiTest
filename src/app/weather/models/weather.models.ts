export interface ForecastModel {
  forecast: { [index: string]: WeatherListModel[] };
  city: CityModel;
}

export interface WeatherModel {
  cod?: string;
  message?: number;
  cnt?: number;
  list?: WeatherListModel[];
  city?: CityModel;
}

export interface CoordinateModel {
  lat?: number;
  lon?: number;
}

export interface CityModel {
  id?: string;
  name?: string;
  coord?: CoordinateModel;
  country?: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}

export interface WeatherListModel {
  Id?: string;
  dt?: number;
  main?: CurrentModel;
  weather?: WeatherDescModel[];
  clouds?: CloudsModel;
  wind?: WindModel;
  sys?: WeatherSysModel;
  dt_txt?: string;
}

export interface CurrentModel {
  temp?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  sea_level?: number;
  grnd_level?: number;
  humidity?: number;
  temp_kf?: number;
}

export interface WeatherDescModel {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}
export interface CloudsModel {
  all?: number;
}
export interface WindModel {
  speed?: number;
  deg?: number;
}
export interface WeatherSysModel {
  pod?: string;
}
