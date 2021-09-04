import { CourseInstructorView } from "../course/CourseInstructorView.model";

export class InstructorView {
    id: number=0;
    fullName: string='';
    lastName: string='';
    firstMidName: string='';
    hireDate: Date;
    location: string ='';
    course: CourseInstructorView[] = [];
}