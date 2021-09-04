import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentCreate } from 'src/app/Dto/model/student/StudentCreare.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;
  pageTitle = 'Student Add';
  errorMessage: string;
  student: StudentCreate = new StudentCreate();
  constructor(private service: StudentService, private router: Router) { }
 

  ngOnInit(): void {
  }

  saveStudent(){
    this.service.createStudent(this.student).subscribe({
      next: () => this.router.navigate(['/students']),
      error: err => this.errorMessage = err
    });
  }

}
