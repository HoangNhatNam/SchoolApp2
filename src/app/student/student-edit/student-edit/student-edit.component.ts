import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentUpdate } from 'src/app/Dto/model/student/StudentUpdate.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentResolved, StudentView } from 'src/app/Dto/model/student/StudentView.model';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @ViewChild(NgForm) studentForm: NgForm;
  pageTitle = 'Student Edit';
  errorMessage: string;

  student: StudentUpdate = new StudentUpdate();
  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      const resolvedData: StudentResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onStudentRetrieved(resolvedData.student);
    });
  }

  onStudentRetrieved(student: StudentUpdate): void {
    this.student = student;
    if (this.student) {
      this.pageTitle = `Student Edit: ${this.student.firstMidName}`;
    } else {
      this.pageTitle = 'No student found';
    }
  }

  saveStudent(): void {        
    // this.service.updateStudent(this.student).subscribe({
    //   next: () => this.router.navigate(['/students']),
    //   error: err => this.errorMessage = err
    // });
    console.log(this.student);
  }

  deleteStudent(){

  }

}
