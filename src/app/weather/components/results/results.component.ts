import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
  forecast$: Observable<any>;
  errorMessage$: Observable<string>;
  keys;

  constructor(private store: Store<WeatherState>) {}

  ngOnInit(): void {
    this.forecast$ = this.store.select(getForecast);
    this.forecast$.subscribe((data) => {
      this.keys = Object.keys(data ?? {});
    });
    this.errorMessage$ = this.store.select(getForecastError);
  }
}
