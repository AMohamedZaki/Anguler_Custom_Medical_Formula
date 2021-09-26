import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInputsComponent } from './button-inputs.component';

describe('ButtonInputsComponent', () => {
  let component: ButtonInputsComponent;
  let fixture: ComponentFixture<ButtonInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
