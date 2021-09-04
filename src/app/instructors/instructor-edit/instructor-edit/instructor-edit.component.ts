import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorUpdate } from 'src/app/Dto/model/instructor/InstructorUpdate.model';
import { InstructorView } from 'src/app/Dto/model/instructor/InstructorView.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  pageTitle = 'Instructor Edit';
  instructor: InstructorView;
  constructor(private service: InstructorService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getInstructor(id);
  }

  getInstructor(id: number): void {
    this.service.getInstructor(id).subscribe({
      next: instructor => this.onInstructorRetrieved(instructor)
    });
  }

  onInstructorRetrieved(instructor: InstructorView): void {
    this.instructor = instructor;

    if (this.instructor) {
      this.pageTitle = `Instructor Edit: ${this.instructor.fullName}`;
    } else {
      this.pageTitle = 'No instructor found';
    }
  }

  saveInstructor(){

  }

  deleteInstructor(){
    
  }

}
