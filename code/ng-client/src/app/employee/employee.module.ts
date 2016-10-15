import { NgModule } from '@angular/core';
import { EmployeeNewComponent } from './employee-new';
import { EmployeeListComponent } from './employee-list';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {EmployeeService} from './employee.service'

@NgModule({
  declarations: [
    EmployeeListComponent, EmployeeNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class EmployeeModule { }