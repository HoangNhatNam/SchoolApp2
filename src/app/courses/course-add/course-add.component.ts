import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { CourseCreate } from 'src/app/Dto/model/course/CourseCreate.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentView } from 'src/app/Dto/model/department/DepartmentView.model';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  @ViewChild(NgForm) courseForm: NgForm;
  pageTitle = 'Course Add';
  errorMessage: string;
  course: CourseCreate = new CourseCreate();
  departments: DepartmentView[] = [];
  constructor(private serviceCourse: CourseService, private router: Router, private serviceDepartment: DepartmentService) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  saveCourse(){
    this.serviceCourse.createCourse(this.course).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: err => this.errorMessage = err
    });
  }

  getDepartment(){
    this.serviceDepartment.getDepartments().subscribe({
      next: departments => {
        this.departments = departments;
      },
      error: err => this.errorMessage = err
    });
  }

}
