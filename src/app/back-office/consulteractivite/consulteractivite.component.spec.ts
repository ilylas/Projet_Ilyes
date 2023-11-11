import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteractiviteComponent } from './consulteractivite.component';

describe('ConsulteractiviteComponent', () => {
  let component: ConsulteractiviteComponent;
  let fixture: ComponentFixture<ConsulteractiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulteractiviteComponent]
    });
    fixture = TestBed.createComponent(ConsulteractiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
