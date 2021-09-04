import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditTagsComponent } from './instructor-edit-tags.component';

describe('InstructorEditTagsComponent', () => {
  let component: InstructorEditTagsComponent;
  let fixture: ComponentFixture<InstructorEditTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorEditTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
