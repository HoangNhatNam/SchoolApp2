import { CourseStudentView } from "../../model/course/CourseStudentView.model";

export class StudentView {
    id: number=0;
    fullName: string='';
    lastName: string='';
    firstMidName: string='';
    enrollmentDate: Date;
    enrollmentCount: number=0;
    course: CourseStudentView[] = [];
}

export class StudentResolved {
    student: StudentView;
    error?: any;
  }