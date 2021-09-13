import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentAddComponent } from './student-add/student-add.component';

import { SharedModule } from '../shared/shared.module';
import { StudentEditEnrollComponent } from './student-edit/student-edit-enroll/student-edit-enroll.component';
import { StudentEditInfoComponent } from './student-edit/student-edit-info/student-edit-info.component';
import { InstructorResolver } from '../services/instructor-resolver.service';
import { StudentResolver } from '../services/student-resover.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { 
          path: 'students', 
          component: StudentListComponent
        },
        { 
          path: 'students/add', 
          component: StudentAddComponent
        },
        {
          path: 'students/:id', 
          component: StudentDetailComponent,
          resolve: { resolvedData: StudentResolver }
        },
        {
          path: 'students/:id/edit', 
          component: StudentEditComponent,
          resolve: { resolvedData: StudentResolver },
          children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: StudentEditInfoComponent },
            { path: 'enroll', component: StudentEditEnrollComponent }
          ]
        }
    ])
  ],
  declarations: [
    StudentListComponent,
    StudentEditComponent,
    StudentDetailComponent,
    StudentAddComponent,
    StudentEditInfoComponent,
    StudentEditEnrollComponent
  ]
})
export class StudentModule { }