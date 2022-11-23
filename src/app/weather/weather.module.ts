import { NgModule } from '@angular/core';
import { WeatherContainerComponent } from './containers/weather-container/weather-container.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { WeatherReducer } from './store/reducers/weather-reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather-effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('weather', WeatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ],
  declarations: [WeatherContainerComponent, SearchComponent, ResultsComponent],
  exports: [WeatherContainerComponent],
})
export class WeatherModule {}
