import { Injectable } from '@angular/core';
import { StudentCreate } from '../Dto/model/student/StudentCreare.model';
import { StudentView } from '../Dto/model/student/StudentView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Student } from '../Dto/entity/student.model';
import { StudentUpdate } from '../Dto/model/student/StudentUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:63757/api/Student'

  getStudents(): Observable<StudentView[]> {
    return this.http.get<StudentView[]>(this.baseURL)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
      );
  }

  getStudent(id: number): Observable<StudentView> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<StudentView>(url)
      .pipe(
        tap(data => console.log('getStudent: ' + JSON.stringify(data))),
      );
  }

  getStudentsPaging(sortOrder: string, keyword: string, pageIndex: number, pageSize: number): Observable<StudentView[]> {
    const url = `${this.baseURL}/paging?sortOrder=${sortOrder}&keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get<StudentView[]>(url)
      .pipe(
        tap(data => console.log('getStudent: ' + JSON.stringify(data))),
      );
  }

  createStudent(student: StudentCreate): Observable<StudentCreate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<StudentCreate>(this.baseURL, student, { headers })
      .pipe(
        tap(data => console.log('createStudent: ' + JSON.stringify(data))),
      );
  }

  deleteStudent(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Student>(url, { headers })
      .pipe(
        tap(data => console.log('deleteStudent: ' + id)),
      );
  }

  updateStudent(student: StudentUpdate): Observable<StudentUpdate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<StudentUpdate>(this.baseURL, student, { headers })
      .pipe(
        tap(() => console.log('updateStudent: ' + student.id)),
        // Return the product on an update
        map(() => student),
      );
  }
}
