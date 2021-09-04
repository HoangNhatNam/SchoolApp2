import { Injectable } from '@angular/core';
import { CourseCreate } from '../Dto/model/course/CourseCreate.model';
import { CourseView } from '../Dto/model/course/CourseView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Course } from '../Dto/entity/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:63757/api/Course'
  formData: CourseCreate = new CourseCreate();
  list: CourseView[];

  getCourses(): Observable<CourseView[]> {
    return this.http.get<CourseView[]>(this.baseURL)
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

  createCourse(course: CourseCreate): Observable<CourseCreate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CourseCreate>(this.baseURL, course, { headers })
      .pipe(
        tap(data => console.log('createStudent: ' + JSON.stringify(data))),
      );
  }

  deleteCourse(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Course>(url, { headers })
      .pipe(
        tap(data => console.log('deleteCourse: ' + id)),
      );
  }

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
