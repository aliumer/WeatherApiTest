import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ForecastModel } from '../../models/weather.models';
import { WeatherState } from '../../store/reducers/weather-reducer';
import {
  getForecastError,
  getForecast,
} from '../../store/selectors/weather-selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  forecast$: Observable<ForecastModel>;
  errorMessage$: Observable<string>;
  keys: string[];

  constructor(private store: Store<WeatherState>) {}

  ngOnInit(): void {
    this.forecast$ = this.store.select(getForecast);
    this.forecast$.subscribe((data: ForecastModel) => {
      if (!!data && data.forecast) {
        this.keys = Object.keys(data.forecast ?? {});
      }
    });
    this.errorMessage$ = this.store.select(getForecastError);
  }
}
