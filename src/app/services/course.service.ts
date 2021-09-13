import { Injectable } from '@angular/core';
import { CourseCreate } from '../Dto/model/course/CourseCreate.model';
import { CourseView } from '../Dto/model/course/CourseView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Course } from '../Dto/entity/course.model';
import { CourseUpdate } from '../Dto/model/course/CourseUpdate.model';

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

  getCourse(id: number): Observable<CourseView> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<CourseView>(url)
      .pipe(
        tap(data => console.log('getCourse: ' + JSON.stringify(data))),
      );
  }

  createCourse(course: CourseCreate): Observable<CourseCreate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CourseCreate>(this.baseURL, course, { headers })
      .pipe(
        tap(data => console.log('createCourse: ' + JSON.stringify(data))),
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

  updateCourse(course: CourseUpdate): Observable<CourseUpdate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<CourseUpdate>(this.baseURL, course, { headers })
      .pipe(
        tap(() => console.log('updatecourse: ' + course.courseID)),
        // Return the course on an update
        map(() => course),
      );
  }
}
