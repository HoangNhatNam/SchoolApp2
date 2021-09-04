import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css']
})
export class InstructorAddComponent implements OnInit {
  errorMessage: string;
  constructor(public service: InstructorService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onSubmit(form: NgForm){
    this.service.createProduct().subscribe(
      res => {
        this.router.navigate(['/instructors']);
      },
      err => {console.log(err)}
    );
    
  }

}
