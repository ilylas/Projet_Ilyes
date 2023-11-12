import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteAModifierComponent } from './activite-a-modifier.component';

describe('ActiviteAModifierComponent', () => {
  let component: ActiviteAModifierComponent;
  let fixture: ComponentFixture<ActiviteAModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteAModifierComponent]
    });
    fixture = TestBed.createComponent(ActiviteAModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
