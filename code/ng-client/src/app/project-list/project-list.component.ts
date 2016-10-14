import { Component, OnInit } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = [];
  }

  ngOnInit() {
    this.projects = [
      new Project({_id: '1234', name: 'Project 1', description: 'My first project'}),
      new Project({_id: '1235', name: 'Project 2', description: 'My second project'}),
      new Project({_id: '1236', name: 'Project 3', description: 'My third project'})
    ];
  }


}
