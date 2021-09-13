import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditEnrollComponent } from './student-edit-enroll.component';

describe('StudentEditEnrollComponent', () => {
  let component: StudentEditEnrollComponent;
  let fixture: ComponentFixture<StudentEditEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
