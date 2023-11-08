import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteractiviteComponent } from './ajouteractivite.component';

describe('AjouteractiviteComponent', () => {
  let component: AjouteractiviteComponent;
  let fixture: ComponentFixture<AjouteractiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteractiviteComponent]
    });
    fixture = TestBed.createComponent(AjouteractiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
