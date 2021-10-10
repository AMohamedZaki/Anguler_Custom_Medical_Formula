import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRuleButtonComponent } from './add-rule-button.component';

describe('AddRuleButtonComponent', () => {
  let component: AddRuleButtonComponent;
  let fixture: ComponentFixture<AddRuleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRuleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRuleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
