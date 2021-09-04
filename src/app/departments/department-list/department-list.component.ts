import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentView } from 'src/app/Dto/model/department/DepartmentView.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  pageTitle = 'Department List';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }
  departments: DepartmentView[] = [];

  constructor(private service: DepartmentService) { }

  ngOnInit(): void {
    this.service.getDepartments().subscribe({
      next: departments => {
        this.departments = departments;
      },
      error: err => this.errorMessage = err
    });
  }

  onDelete(id: number){

  }

}
