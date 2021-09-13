import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentView } from 'src/app/Dto/model/department/DepartmentView.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  pageTitle = 'Department Detail';
  department: DepartmentView;
  constructor(private service: DepartmentService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getdepartment(id);
  }

  getdepartment(id: number): void {
    this.service.getDepartment(id).subscribe({
      next: course => this.onDepartmentRetrieved(course)
    });
  }

  onDepartmentRetrieved(department: DepartmentView): void {
    this.department = department;

    if (this.department) {
      this.pageTitle = `Department Detail: ${this.department.name}`;
    } else {
      this.pageTitle = 'No student found';
    }
  }

}
