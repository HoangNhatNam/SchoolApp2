import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { StudentResolved } from "../Dto/model/student/StudentView.model";
import { StudentService } from "./student.service";

@Injectable({
    providedIn: 'root'
  })
  export class StudentResolver implements Resolve<StudentResolved>{

    constructor(private service: StudentService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StudentResolved>{
        const id = Number(route.paramMap.get('id'));
        if(isNaN(+id)){
            const message = `Student is was not a number: ${id}`;
            console.error(message);
            return of({ student: null as any, error: message });
        }

        return this.service.getStudent(id)
      .pipe(
        map(student => ({ student })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ student: null as any, error: message });
        })
      );
    }

  }