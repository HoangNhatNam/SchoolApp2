import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditInfoComponent } from './department-edit-info.component';

describe('DepartmentEditInfoComponent', () => {
  let component: DepartmentEditInfoComponent;
  let fixture: ComponentFixture<DepartmentEditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
