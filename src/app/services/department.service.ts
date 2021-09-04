import { Injectable } from '@angular/core';
import { DepartmentCreate } from '../Dto/model/department/DepartmentCreate.model';
import { DepartmentView } from '../Dto/model/department/DepartmentView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Course } from '../Dto/entity/course.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:63757/api/Department'
  formData: DepartmentCreate = new DepartmentCreate();
  list: DepartmentView[];

  getDepartments(): Observable<DepartmentView[]> {
    return this.http.get<DepartmentView[]>(this.baseURL)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
      );
  }

//   getStudent(id: number): Observable<StudentView> {
//     const url = `${this.baseURL}/${id}`;
//     return this.http.get<StudentView>(url)
//       .pipe(
//         tap(data => console.log('getStudent: ' + JSON.stringify(data))),
//       );
//   }

//   createStudent(student: Student): Observable<Student> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post<Student>(this.baseURL, student, { headers })
//       .pipe(
//         tap(data => console.log('createStudent: ' + JSON.stringify(data))),
//       );
//   }

//   deleteStudent(id: number): Observable<{}> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     const url = `${this.baseURL}/${id}`;
//     return this.http.delete<Student>(url, { headers })
//       .pipe(
//         tap(data => console.log('deleteStudent: ' + id)),
//       );
//   }

//   updateProduct(student: Student): Observable<Student> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     const url = `${this.baseURL}/${student.id}`;
//     return this.http.put<Student>(url, student, { headers })
//       .pipe(
//         tap(() => console.log('updateStudent: ' + student.id)),
//         // Return the product on an update
//         map(() => student),
//       );
//   }
}
