import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentView } from 'src/app/Dto/model/student/StudentView.model';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Filter } from 'src/app/Dto/model/filter.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  pageTitle = 'Student List';
  errorMessage: string;
  students$!: Observable<StudentView[]>;
  page: number = 1;
  
  sortOrder: string = 'lastname';
  keyword: string = '';
  pageIndex: number = 1;
  pageSize: number = 10;
  searchTerms = new BehaviorSubject<any>({ "sortOrder": this.sortOrder, "keyword": this.keyword, "pageIndex": this.pageIndex, "pageSize": this.pageSize });
  
  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.searchTerms.next(this.route.snapshot.queryParamMap.get('filterBy') || '');
    this.students$ = this.getMapData(this.searchTerms);
  }

  onDelete(id: number){
    if(confirm('Are you sure delete this record?')){
      this.service.deleteStudent(id).subscribe();
    }
  }

  previous(){
    this.page--;
  }

  next(){
    this.page++;
  }

  onSortOrderChange(sortOrder: string) {
    this.sortOrder = sortOrder;
    this.searchTerms.next({ "sortOrder": this.sortOrder, "keyword": this.keyword, "pageIndex": this.pageIndex, "pageSize": this.pageSize });
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    this.searchTerms.next({ "sortOrder": this.sortOrder, "keyword": this.keyword, "pageIndex": this.pageIndex, "pageSize": this.pageSize });
  }

  onPageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.searchTerms.next({ "sortOrder": this.sortOrder, "keyword": this.keyword, "pageIndex": this.pageIndex, "pageSize": this.pageSize });
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.searchTerms.next({ "sortOrder": this.sortOrder, "keyword": this.keyword, "pageIndex": this.pageIndex, "pageSize": this.pageSize });
  }

  getMapData(searchTerms: Observable<Filter>) {
    return searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(1000),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap(input => {
        let sortOrder = input.sortOrder;
        let keyword = input.keyword;
        let pageIndex = input.pageIndex;
        let pageSize = input.pageSize;

        if (sortOrder && pageIndex && pageSize) {
          return this.service.getStudentsPaging(sortOrder, keyword, pageIndex, pageSize);
        } else {
          return of([]);
        }
      })
    );
  }

}
