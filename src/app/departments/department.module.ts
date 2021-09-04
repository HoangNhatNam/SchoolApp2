import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEditComponent } from './department-edit/department-edit/department-edit.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentAddComponent } from './department-add/department-add.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { path: 'departments', component: DepartmentListComponent},
        { path: 'departments/add', component: DepartmentAddComponent},
        { path: 'departments/:id', component: DepartmentDetailComponent},
        { path: 'departments/:id/edit', component: DepartmentEditComponent}
    ])
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentDetailComponent,
    DepartmentAddComponent
  ]
})
export class DepartmentModule { }