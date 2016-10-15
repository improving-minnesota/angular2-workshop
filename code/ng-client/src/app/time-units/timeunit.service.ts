import { Injectable } from '@angular/core';

import { ExtHttp } from '../shared/extHttp.service';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  // TODO: Implement me
  // HINT: User is in /auth
  // URL: /users/${userId}/timesheets/${timesheetId}/timeunits
  //getTimeUnits(user: User, timesheetId: string): Observable<any> {}
}
