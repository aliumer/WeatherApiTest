import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WeatherService } from '../../services/weather.service';
import * as fromActions from '../actions/weather-actions';
import { catchError, map, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {
  constructor(
    private action$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  public LoadForecast$ = this.action$.pipe(
    ofType(fromActions.LOAD_FORECAST),
    concatMap((action: fromActions.LoadForecast) =>
      this.weatherService.getWeatherByCity(action.city).pipe(
        map((data) => new fromActions.LoadForecastSuccess(data)),
        catchError((response) =>
          of(
            new fromActions.LoadForecastFailure(
              `status: ${response.error.cod}, ${response.error.message}`
            )
          )
        )
      )
    )
  );
}
