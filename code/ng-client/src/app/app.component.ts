import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {}

  message:String;

  ngOnInit() {
    this.message = 'Hello and welcome to the workshop!'
  }

}
