import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiweatherComponent } from './apiweather.component';

describe('ApiweatherComponent', () => {
  let component: ApiweatherComponent;
  let fixture: ComponentFixture<ApiweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiweatherComponent]
    });
    fixture = TestBed.createComponent(ApiweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
