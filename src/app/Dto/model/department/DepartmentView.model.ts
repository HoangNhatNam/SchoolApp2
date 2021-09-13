import { CourseDepartmentView } from "../course/CourseDepartmentView.model";

export class DepartmentView {
    departmentID: number=0;
    name: string='';
    budget: number=0;
    startDate: Date;
    instructorID: number=0;
    courses: CourseDepartmentView[] = [];
}