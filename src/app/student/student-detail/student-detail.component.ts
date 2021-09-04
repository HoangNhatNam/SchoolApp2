import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  pageTitle = 'Student Detail';
  student: StudentView;
  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getStudent(id);
  }

  getStudent(id: number): void {
    this.service.getStudent(id).subscribe({
      next: student => this.onStudentRetrieved(student)
    });
  }

  onStudentRetrieved(student: StudentView): void {
    this.student = student;

    if (this.student) {
      this.pageTitle = `Student Detail: ${this.student.fullName}`;
    } else {
      this.pageTitle = 'No student found';
    }
  }

}
