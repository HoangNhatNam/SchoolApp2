import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditTagsComponent } from './course-edit-tags.component';

describe('CourseEditTagsComponent', () => {
  let component: CourseEditTagsComponent;
  let fixture: ComponentFixture<CourseEditTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEditTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
