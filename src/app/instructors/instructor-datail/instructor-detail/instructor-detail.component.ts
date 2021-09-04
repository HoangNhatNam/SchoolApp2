import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorView } from 'src/app/Dto/model/instructor/InstructorView.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  pageTitle = 'Instructor Detail';
  instructor: InstructorView;
  constructor(private service: InstructorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getInstructor(id);
  }

  getInstructor(id: number): void {
    this.service.getProduct(id).subscribe({
      next: instructor => this.onInstructorRetrieved(instructor)
    });
  }

  onInstructorRetrieved(instructor: InstructorView): void {
    this.instructor = instructor;

    if (this.instructor) {
      this.pageTitle = `Instructor Detail: ${this.instructor.fullName}`;
    } else {
      this.pageTitle = 'No instructor found';
    }
  }

}
