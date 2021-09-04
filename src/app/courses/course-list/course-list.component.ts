import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { CourseView } from 'src/app/Dto/model/course/CourseView.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  pageTitle = 'Course List';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }
  courses: CourseView[] = [];

  constructor(private service: CourseService, private route: Router) { }

  ngOnInit(): void {
    this.service.getCourses().subscribe({
      next: courses => {
        this.courses = courses;
      },
      error: err => this.errorMessage = err
    });
  }

  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteCourse(id).subscribe({
        next: () => this.service.getCourses().subscribe({
          next: courses => {
            this.courses = courses;
          }
        }),
      });
    }
  }

}
