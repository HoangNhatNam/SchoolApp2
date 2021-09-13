import { CourseStudentView } from "../course/CourseStudentView.model";

export class StudentUpdate {
    id: number=0;
    lastName: string='';
    firstMidName: string='';
    enrollmentDate: Date;
    course: CourseStudentView[] = [];
}