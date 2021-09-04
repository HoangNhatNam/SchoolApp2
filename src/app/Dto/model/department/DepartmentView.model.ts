import { Course } from "../../entity/course.model";

export class DepartmentView {
    departmentID: number=0;
    name: string='';
    budget: number=0;
    startDate: Date;
    courses: Course[] = [];
}