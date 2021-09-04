import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditInfoComponent } from './instructor-edit-info.component';

describe('InstructorEditInfoComponent', () => {
  let component: InstructorEditInfoComponent;
  let fixture: ComponentFixture<InstructorEditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorEditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
