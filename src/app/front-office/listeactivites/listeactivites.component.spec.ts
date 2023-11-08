import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeactivitesComponent } from './listeactivites.component';

describe('ListeactivitesComponent', () => {
  let component: ListeactivitesComponent;
  let fixture: ComponentFixture<ListeactivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeactivitesComponent]
    });
    fixture = TestBed.createComponent(ListeactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
