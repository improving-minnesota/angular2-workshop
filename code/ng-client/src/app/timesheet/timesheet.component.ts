import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'timesheet.component.html',
})
export class TimesheetComponent implements OnInit {

  message: String;

  ngOnInit() {
    this.message = 'I should show you details about a timesheet';
  }
}
