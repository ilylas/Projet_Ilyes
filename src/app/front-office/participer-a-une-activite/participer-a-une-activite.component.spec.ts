import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiperAUneActiviteComponent } from './participer-a-une-activite.component';

describe('ParticiperAUneActiviteComponent', () => {
  let component: ParticiperAUneActiviteComponent;
  let fixture: ComponentFixture<ParticiperAUneActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticiperAUneActiviteComponent]
    });
    fixture = TestBed.createComponent(ParticiperAUneActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
