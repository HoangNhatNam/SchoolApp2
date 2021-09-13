import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { StudentResolved, StudentView } from 'src/app/Dto/model/student/StudentView.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  pageTitle = 'Student Detail';
  student: StudentView;
  errorMessage: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: StudentResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onStudentRetrieved(resolvedData.student);
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
