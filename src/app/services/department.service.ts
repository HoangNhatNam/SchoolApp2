import { Injectable } from '@angular/core';
import { DepartmentCreate } from '../Dto/model/department/DepartmentCreate.model';
import { DepartmentView } from '../Dto/model/department/DepartmentView.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Course } from '../Dto/entity/course.model';
import { Department } from '../Dto/entity/department.model';
import { DepartmentUpdate } from '../Dto/model/department/DepartmentUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:63757/api/Department'

  getDepartments(): Observable<DepartmentView[]> {
    return this.http.get<DepartmentView[]>(this.baseURL)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDepartment(id: number): Observable<DepartmentView> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<DepartmentView>(url)
      .pipe(
        tap(data => console.log('getStudent: ' + JSON.stringify(data))),
      );
  }

  createDepartment(department: DepartmentCreate): Observable<DepartmentCreate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<DepartmentCreate>(this.baseURL, department, { headers })
      .pipe(
        tap(data => console.log('createDepartment: ' + JSON.stringify(data))),
      );
  }

  deleteDepartment(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Department>(url, { headers })
      .pipe(
        tap(data => console.log('deleteDepartment: ' + id)),
      );
  }

  updateDepartment(department: DepartmentUpdate): Observable<DepartmentUpdate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<DepartmentUpdate>(this.baseURL, department, { headers })
      .pipe(
        tap(() => console.log('updateDepartment: ' + department.departmentID)),
        // Return the department on an update
        map(() => department),
      );
  }
}
