import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentCreate } from 'src/app/Dto/model/department/DepartmentCreate.model';
import { DepartmentService } from 'src/app/services/department.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';
import { InstructorView } from 'src/app/Dto/model/instructor/InstructorView.model';
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  @ViewChild(NgForm) departmentForm: NgForm;
  pageTitle = 'Department Add';
  errorMessage: string;
  department: DepartmentCreate = new DepartmentCreate();
  instructors: InstructorView[] = [];
  constructor(private serviceDepartment: DepartmentService, private router: Router, private serviceInstructor: InstructorService) { }

  ngOnInit(): void {
    this.getInstructors();
  }

  saveDepartment(){
    this.serviceDepartment.createDepartment(this.department).subscribe({
      next: () => this.router.navigate(['/departments']),
      error: err => this.errorMessage = err
    });
  }

  getInstructors(){
    this.serviceInstructor.getInstructors().subscribe({
      next: instructors => {
        this.instructors = instructors;
      },
      error: err => this.errorMessage = err
    });
  }

}
