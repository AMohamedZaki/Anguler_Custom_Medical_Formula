import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalGroupTestComponent } from './clinical-group-test.component';

describe('ClinicalGroupTestComponent', () => {
  let component: ClinicalGroupTestComponent;
  let fixture: ComponentFixture<ClinicalGroupTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalGroupTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalGroupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
