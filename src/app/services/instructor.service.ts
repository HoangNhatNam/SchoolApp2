import { Injectable } from '@angular/core';
import { InstructorCreate } from '../Dto/model/instructor/InstructorCreate.model';
import { InstructorView } from '../Dto/model/instructor/InstructorView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { never, Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Instructor } from '../Dto/entity/instructor.model';
import { InstructorUpdate } from '../Dto/model/instructor/InstructorUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:63757/api/Instructor'
  
  getInstructors(): Observable<InstructorView[]> {
    return this.http.get<InstructorView[]>(this.baseURL)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
  getInstructor(id: number): Observable<InstructorView> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<InstructorView>(url)
      .pipe(
        tap(data => console.log('getInstructor: ' + JSON.stringify(data))),
      );
  }
  getInstructorPaging(sortOrder: string, keyword: string, pageIndex: number, pageSize: number): Observable<InstructorView> {
    const url = `${this.baseURL}/paging?sortOrder=${sortOrder}&keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get<InstructorView>(url)
      .pipe(
        tap(data => console.log('getInstructor: ' + JSON.stringify(data))),
      );
  }
  createInstructor(instructor: InstructorCreate): Observable<InstructorCreate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<InstructorCreate>(this.baseURL, instructor, { headers })
      .pipe(
        tap(data => console.log('createInstructor: ' + JSON.stringify(data))),
      );
  }
  deleteInstructor(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Instructor>(url, { headers })
      .pipe(
        tap(data => console.log('deleteInstructor: ' + id)),
      );
  }
  updateInstructor(instructor: InstructorUpdate): Observable<InstructorUpdate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<InstructorUpdate>(this.baseURL, instructor, { headers })
      .pipe(
        tap(() => console.log('updateinstructor: ' + instructor.id)),
        // Return the product on an update
        map(() => instructor),
      );
  }
}
