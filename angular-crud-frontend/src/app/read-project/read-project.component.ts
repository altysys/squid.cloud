import { Component } from '@angular/core';
import { Squid } from '@squidcloud/client';

type Project = { id: string; projectName: string; managerName: string };

@Component({
  selector: 'read-projects',
  template: `
    <table>
      <thead>
        <tr>
          <th>Project Title</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let project of projects | async">
          <td>
            {{ project.projectName }}
          </td>
          <td>
            {{ project.managerName }}
          </td>
          <!-- options contains update and delete -->
          <options [id]="project.id" />
        </tr>
      </tbody>
    </table>
  `,
})
export class ReadProjectComponent {
  constructor(private readonly squid: Squid) {}

  /* Sets the users variable to an observable of the 'users' collection
   * and subscribes to updates */
  projects = this.squid.collection<Project>('projects').query().dereference().snapshots();
  a = this.squid.callApi('Employee', 'GetWeatherForecast').then((data) => {
    console.log(data);
  });

}
