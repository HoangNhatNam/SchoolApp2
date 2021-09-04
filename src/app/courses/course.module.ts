import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit/course-edit.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseAddComponent } from './course-add/course-add.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { path: 'courses', component: CourseListComponent},
        { path: 'courses/add', component: CourseAddComponent},
        { path: 'courses/:id', component: CourseDetailComponent},
        { path: 'courses/:id/edit', component: CourseEditComponent}
    ])
  ],
  declarations: [
    CourseListComponent,
    CourseEditComponent,
    CourseDetailComponent,
    CourseAddComponent
  ]
})
export class CourseModule { }