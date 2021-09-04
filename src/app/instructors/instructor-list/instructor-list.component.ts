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
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.instructors;
  }
  filteredProducts: InstructorView[] = [];
  instructors: InstructorView[] = [];

  constructor(public service: InstructorService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: instructors => {
        this.instructors = instructors;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string): InstructorView[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.instructors.filter((instructor: InstructorView) =>
    instructor.firstMidName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteInstructor(id).subscribe(
        res => {
          this.service.getProducts().subscribe({
            next: instructors => {
              this.instructors = instructors;
              this.filteredProducts = this.performFilter(this.listFilter);
            },
            error: err => this.errorMessage = err
          });
        },
        err => {console.log(err)}
      );
    }
  }

}
