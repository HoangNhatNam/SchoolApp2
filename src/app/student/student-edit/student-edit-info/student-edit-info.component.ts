import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';
import { StudentUpdate } from 'src/app/Dto/model/student/StudentUpdate.model';

@Component({
  selector: 'app-student-edit-info',
  templateUrl: './student-edit-info.component.html',
  styleUrls: ['./student-edit-info.component.css']
})
export class StudentEditInfoComponent implements OnInit {
  @ViewChild(NgForm) studentForm: NgForm;
  student: StudentUpdate;
  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.student = data['resolvedData'].student;
    });
  }
}
