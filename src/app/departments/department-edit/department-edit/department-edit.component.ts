import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentUpdate } from 'src/app/Dto/model/department/DepartmentUpdate.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InstructorService } from 'src/app/services/instructor.service';
import { InstructorView } from 'src/app/Dto/model/instructor/InstructorView.model';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  @ViewChild(NgForm) departmentForm: NgForm;
  pageTitle = 'Department Edit';
  errorMessage: string;
  department: DepartmentUpdate = new DepartmentUpdate();
  instructors: InstructorView[] = [];

  constructor(private service: DepartmentService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getDepartment(id);
    this.getInstructor();
  }

  getDepartment(id: number): void {
    this.service.getDepartment(id).subscribe({
      next: department => this.onDepartmentRetrieved(department)
    });
  }

  getInstructor(){
    this.instructorService.getInstructors().subscribe({
      next: instructors => {
        this.instructors = instructors;
      },
      error: err => this.errorMessage = err
    });
  }

  onDepartmentRetrieved(department: DepartmentUpdate): void {
    this.department = department;

    if (this.department) {
      this.pageTitle = `department Edit: ${this.department.name}`;
    } else {
      this.pageTitle = 'No department found';
    }
  }

  saveDepartment(): void {        
    this.service.updateDepartment(this.department).subscribe({
      next: () => this.router.navigate(['/departments']),
      error: err => this.errorMessage = err
    });
  }

  deleteDepartment(){

  }

}
