import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentView } from 'src/app/Dto/model/department/DepartmentView.model';
import { Router } from '@angular/router';

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

  constructor(private service: DepartmentService, private route: Router) { }

  ngOnInit(): void {
    this.service.getDepartments().subscribe({
      next: departments => {
        this.departments = departments;
      },
      error: err => this.errorMessage = err
    });
  }

  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteDepartment(id).subscribe({
        next: () => this.service.getDepartments().subscribe({
          next: departments => {
            this.departments = departments;
          }
        }),
      });
    }
  }

}
