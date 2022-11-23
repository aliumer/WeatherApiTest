import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContainerComponent } from './weather-container.component';

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
