import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaInputsComponent } from './formula-inputs.component';

describe('FormulaInputsComponent', () => {
  let component: FormulaInputsComponent;
  let fixture: ComponentFixture<FormulaInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
