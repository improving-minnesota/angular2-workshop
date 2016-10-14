import {NgModule} from '@angular/core';
import {ProjectListComponent} from './project-list';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {ProjectService} from './project.service'

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [],
  providers: [ProjectService],
  bootstrap: []
})
export class ProjectModule {
}
