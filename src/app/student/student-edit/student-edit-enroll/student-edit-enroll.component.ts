import { Component, OnInit } from '@angular/core';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/Dto/entity/grade.model';
import { StudentUpdate } from 'src/app/Dto/model/student/StudentUpdate.model';

@Component({
  selector: 'app-student-edit-enroll',
  templateUrl: './student-edit-enroll.component.html',
  styleUrls: ['./student-edit-enroll.component.css']
})
export class StudentEditEnrollComponent implements OnInit {
  student: StudentUpdate;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.student = data['resolvedData'].student;
    });
  }
}
