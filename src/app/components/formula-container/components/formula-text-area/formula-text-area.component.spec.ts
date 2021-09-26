import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTextAreaComponent } from './formula-text-area.component';

describe('FormulaTextAreaComponent', () => {
  let component: FormulaTextAreaComponent;
  let fixture: ComponentFixture<FormulaTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
