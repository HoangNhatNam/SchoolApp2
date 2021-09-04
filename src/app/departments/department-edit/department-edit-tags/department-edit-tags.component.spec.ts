import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditTagsComponent } from './department-edit-tags.component';

describe('DepartmentEditTagsComponent', () => {
  let component: DepartmentEditTagsComponent;
  let fixture: ComponentFixture<DepartmentEditTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEditTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
