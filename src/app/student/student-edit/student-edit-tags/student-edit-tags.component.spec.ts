import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditTagsComponent } from './student-edit-tags.component';

describe('StudentEditTagsComponent', () => {
  let component: StudentEditTagsComponent;
  let fixture: ComponentFixture<StudentEditTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
