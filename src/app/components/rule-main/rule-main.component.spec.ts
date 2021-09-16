import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleMainComponent } from './rule-main.component';

describe('RuleMainComponent', () => {
  let component: RuleMainComponent;
  let fixture: ComponentFixture<RuleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
