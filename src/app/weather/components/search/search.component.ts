import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherState } from '../../store/reducers/weather-reducer';
import * as fromActions from '../../store/actions/weather-actions';
import { getForecastError } from '../../store/selectors/weather-selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  city: string;
  errorMessage$: Observable<string>;

  ngOnInit(): void {
    this.errorMessage$ = this.store.select(getForecastError);
  }

  constructor(private store: Store<WeatherState>) {}

  search() {
    this.store.dispatch(new fromActions.LoadForecast(this.city));
  }
}
