import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsTestComponent } from './tags-test.component';

describe('TagsTestComponent', () => {
  let component: TagsTestComponent;
  let fixture: ComponentFixture<TagsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
