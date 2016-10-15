import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from '../shared';
import { User } from '../auth';
import { Timesheet } from './Timesheet';

@Injectable()
export class TimesheetService {

  constructor(private http: ExtHttp) {
  }

  getTimesheets(user: User): Observable<Timesheet[]> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  getTimesheet(user: User, timesheetId: string): Observable<Timesheet> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}`).subscribe((response) => {
        observer.next(new Timesheet(response.json()));
      });
    });
  }

  save(user: User, timesheet: Timesheet) {
    return Observable.create((observer) => {
      this.http.post(`/users/${user.id}/timesheets`, timesheet).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }
}
