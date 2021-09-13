import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Instructor, InstructorResolved } from "../Dto/entity/instructor.model";
import { InstructorView } from "../Dto/model/instructor/InstructorView.model";
import { InstructorService } from "./instructor.service";

@Injectable({
    providedIn: 'root'
  })
  export class InstructorResolver implements Resolve<InstructorResolved>{

    constructor(private service: InstructorService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InstructorResolved>{
        const id = Number(route.paramMap.get('id'));
        if(isNaN(+id)){
            const message = `Instructor is was not a number: ${id}`;
            console.error(message);
            return of({ instructor: new InstructorView(), error: message });
        }

        return this.service.getInstructor(id)
      .pipe(
        map(instructor => ({ instructor })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ instructor: new InstructorView(), error: message });
        })
      );
    }

  }