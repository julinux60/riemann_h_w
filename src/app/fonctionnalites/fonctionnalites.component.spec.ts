import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnalitesComponent } from './fonctionnalites.component';

describe('FonctionnalitesComponent', () => {
  let component: FonctionnalitesComponent;
  let fixture: ComponentFixture<FonctionnalitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionnalitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionnalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
