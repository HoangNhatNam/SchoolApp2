import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit/instructor-edit.component';
import { InstructorDetailComponent } from './instructor-datail/instructor-detail/instructor-detail.component';
import { InstructorAddComponent } from './instructor-add/instructor-add/instructor-add.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { path: 'instructors', component: InstructorListComponent},
        { path: 'instructors/add', component: InstructorAddComponent},
        { path: 'instructors/:id', component: InstructorDetailComponent},
        { path: 'instructors/edit/:id', component: InstructorEditComponent}
    ])
  ],
  declarations: [
    InstructorListComponent,
    InstructorEditComponent,
    InstructorDetailComponent,
    InstructorAddComponent
  ]
})
export class InstructorModule { }