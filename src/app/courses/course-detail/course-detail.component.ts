import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CourseView } from 'src/app/Dto/model/course/CourseView.model';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  pageTitle = 'Course Detail';
  course: CourseView;
  constructor(private service: CourseService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCourse(id);
  }

  getCourse(id: number): void {
    this.service.getCourse(id).subscribe({
      next: course => this.onCourseRetrieved(course)
    });
  }

  onCourseRetrieved(course: CourseView): void {
    this.course = course;

    if (this.course) {
      this.pageTitle = `Course Detail: ${this.course.title}`;
    } else {
      this.pageTitle = 'No student found';
    }
  }
}
