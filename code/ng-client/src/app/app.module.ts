import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProjectListModule} from './project-list/project-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
