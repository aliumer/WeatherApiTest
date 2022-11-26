import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { WeatherService } from '../../services/weather.service';
import { WeatherState } from '../reducers/weather-reducer';
import { WeatherEffects } from './weather-effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as fromActions from '../actions/weather-actions';
import { hot, cold } from 'jasmine-marbles';
import { of, throwError } from 'rxjs';

const city = {
  id: '2633709',
  name: 'Leeds',
  country: 'GB',
  population: 103932,
};
const mockData = {
  city: city,
  cod: '',
  message: 0,
  cnt: 0,
  list: [],
};

const mockDataSuccess = {
  city: city,
  forecast: [],
};

describe('WeatherEffects', () => {
  let actions$;
  let effects: WeatherEffects;
  const weatherServiceMock = jasmine.createSpyObj('WeatherService', [
    'getWeatherByCity',
  ]);
  let store: Store<WeatherState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceMock,
        },
        WeatherEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
      ],
    });
    effects = TestBed.get(WeatherEffects);
    store = TestBed.get(Store) as Store<WeatherState>;
  });

  describe('LoadForecast success', () => {
    it('should return weather forecast of Leeds', () => {
      weatherServiceMock.getWeatherByCity.and.returnValue(of(mockData));
      const action = new fromActions.LoadForecast('Leeds');
      const completion = new fromActions.LoadForecastSuccess(mockDataSuccess);
      actions$ = hot('-a|', { a: action });
      const expected = cold('-b|', { b: completion });
      expected.subscribe((data) => {
        expect(data.weather.city.name).toBe('Leeds');
      });
    });
  });

  describe('LoadForecast Failure', () => {
    it('should return error when invlaid city name is provided', () => {
      const err = 'Status: 404, city not found';
      weatherServiceMock.getWeatherByCity.and.returnValue(throwError(err));
      const loadAction = new fromActions.LoadForecast('LeedsTest');
      const failureAction = new fromActions.LoadForecastFailure(err);
      actions$ = hot('-a|', { a: loadAction });
      const expected = cold('-b|', { b: failureAction });
      expected.subscribe((data) => {
        expect(data.error).toBe(err);
      });
    });
  });
});
