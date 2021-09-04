import { Component, OnInit } from '@angular/core';
import { InstructorView } from 'src/app/Dto/model/instructor/InstructorView.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  pageTitle = 'Instructor List';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }
  instructors: InstructorView[] = [];

  constructor(public service: InstructorService) { }

  ngOnInit(): void {
    this.service.getInstructors().subscribe({
      next: instructors => {
        this.instructors = instructors;
      },
      error: err => this.errorMessage = err
    });
  }
  
  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteInstructor(id).subscribe({
        next: () => this.service.getInstructors().subscribe({
          next: instructors => {
            this.instructors = instructors;
          }
        }),
      });
    }
  }

}
