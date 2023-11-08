import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeractiviteComponent } from './supprimeractivite.component';

describe('SupprimeractiviteComponent', () => {
  let component: SupprimeractiviteComponent;
  let fixture: ComponentFixture<SupprimeractiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimeractiviteComponent]
    });
    fixture = TestBed.createComponent(SupprimeractiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
