import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  pageTitle = 'Student List';
  errorMessage: string;
  students$!: Observable<StudentView[]>;
  private searchTerms = new Subject<string>();
  page: number = 1;

  constructor(private service: StudentService, private route: Router) { }

  search(keyword: string): void {
    this.searchTerms.next(keyword);
  }

  ngOnInit(): void {
    this.students$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((keyword: string) => this.service.getStudentsPaging('lastname',keyword, 1, 10)),
    );
  }

  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteStudent(id).subscribe({
        next: () => this.students$ = this.searchTerms.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((keyword: string) => this.service.getStudentsPaging('lastname',keyword, 1, 10)),
        ),
      });
    }
  }

  previous(){
    this.page--;
  }

  next(){
    this.page++
  }

}
