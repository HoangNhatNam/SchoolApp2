import { InstructorView } from "../model/instructor/InstructorView.model";

export class Instructor {
    id: number=0;
    lastName: string='';
    firstMidName: string='';
    hireDate: Date;
}

export class InstructorResolved {
    instructor: InstructorView;
    error?: any;
  }