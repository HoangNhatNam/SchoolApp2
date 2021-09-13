import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { CourseUpdate } from 'src/app/Dto/model/course/CourseUpdate.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentView } from 'src/app/Dto/model/department/DepartmentView.model';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @ViewChild(NgForm) courseForm: NgForm;
  pageTitle = 'Course Edit';
  errorMessage: string;
  course: CourseUpdate = new CourseUpdate();
  departments: DepartmentView[] = [];

  constructor(
    private service: CourseService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private serviceDepartment: DepartmentService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getCourse(id);
    this.getDepartment();
  }

  getCourse(id: number): void {
    this.service.getCourse(id).subscribe({
      next: course => this.onInstructorRetrieved(course)
    });
  }

  onInstructorRetrieved(course: CourseUpdate): void {
    this.course = course;

    if (this.course) {
      this.pageTitle = `course Edit: ${this.course.title}`;
    } else {
      this.pageTitle = 'No course found';
    }
  }

  getDepartment(){
    this.serviceDepartment.getDepartments().subscribe({
      next: departments => {
        this.departments = departments;
      },
      error: err => this.errorMessage = err
    });
  }

  saveCourse(): void {        
    this.service.updateCourse(this.course).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: err => this.errorMessage = err
    });
  }

  deleteCourse(){

  }

}
