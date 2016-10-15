import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../shared/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../auth';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  getTimeUnits(user: User, timesheetId: string): Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits`).subscribe((response) => {
        let units = response.json().map((data) => {
          let unit = new TimeUnit(data);
          return unit;
        });
        observer.next(units);
      });
    });
  }
}
