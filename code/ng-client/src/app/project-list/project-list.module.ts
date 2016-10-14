import { NgModule } from '@angular/core';
import { ProjectListComponent } from './';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  exports: [
    ProjectListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectListModule { }
