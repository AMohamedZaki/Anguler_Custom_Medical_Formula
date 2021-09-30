import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaGroupComponent } from './formula-group.component';

describe('FormulaGroupComponent', () => {
  let component: FormulaGroupComponent;
  let fixture: ComponentFixture<FormulaGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
