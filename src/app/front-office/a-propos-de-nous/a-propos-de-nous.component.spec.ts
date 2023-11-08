import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposDeNousComponent } from './a-propos-de-nous.component';

describe('AProposDeNousComponent', () => {
  let component: AProposDeNousComponent;
  let fixture: ComponentFixture<AProposDeNousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposDeNousComponent]
    });
    fixture = TestBed.createComponent(AProposDeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
