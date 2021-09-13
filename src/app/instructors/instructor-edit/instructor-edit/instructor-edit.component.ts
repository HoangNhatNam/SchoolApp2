import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorUpdate } from 'src/app/Dto/model/instructor/InstructorUpdate.model';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  @ViewChild(NgForm) instructorForm: NgForm;
  pageTitle = 'Instructor Edit';
  errorMessage: string;
  instructor: InstructorUpdate;
  constructor(
    private service: InstructorService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,) { }
  
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getInstructor(id);
  }

  getInstructor(id: number): void {
    this.service.getInstructor(id).subscribe({
      next: instructor => this.onInstructorRetrieved(instructor)
    });
  }

  onInstructorRetrieved(instructor: InstructorUpdate): void {
    this.instructor = instructor;

    if (this.instructor) {
      this.pageTitle = `Instructor Edit: ${this.instructor.fullName}`;
    } else {
      this.pageTitle = 'No instructor found';
    }
  }

  saveInstructor(){
    this.service.updateInstructor(this.instructor).subscribe({
      next: () => this.router.navigate(['/instructors']),
      error: err => this.errorMessage = err
    });
  }

  deleteInstructor(){
    
  }

}
