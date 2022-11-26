import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherModel } from '../models/weather.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private uri = environment.apiUri;
  private apiKey = environment.apiKey;
  private myApi = environment.openWeatherApiUrl;

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherModel> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.myApi, { params });
  }
}
