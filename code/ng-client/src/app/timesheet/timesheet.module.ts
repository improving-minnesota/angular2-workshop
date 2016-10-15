import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material';

import {TimeUnitsModule} from '../time-units'
import {IdentityService} from '../auth'

import {TimesheetService} from './timesheet.service'
import {TimesheetComponent} from './timesheet.component'
import {TimesheetListComponent} from './timesheet-list';
import {TimesheetDetailComponent} from './timesheet-detail';
import {TimeUnitService} from '../time-units';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TimeUnitsModule
  ],
  providers: [TimesheetService, IdentityService, TimeUnitService],
  bootstrap: []
})
export class TimesheetModule {
}
