import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  pageTitle = 'Student List';
  students$!: Observable<StudentView[]>;
  private searchTerms = new Subject<string>();
  page: number = 1;

  constructor(private service: StudentService) { }

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

  }

  previous(){
    this.page--;
  }

  next(){
    this.page++
  }

}
