import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {EmployeeService} from './employee.service'

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class EmployeeModule { }