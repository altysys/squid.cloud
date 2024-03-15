import { Component } from '@angular/core';
import { Squid } from '@squidcloud/client';

// Define your type
type Project = { id: string; projectName: string; managerName: string };
@Component({
  selector: 'insert-project',
  template: `
    <button id="insert" (click)="insertNewUser()">Create new user</button>
    <br />
  `,
  styleUrls: ['./insert-project.component.scss'],
})
export class InsertProjectComponent {
  constructor(private readonly squid: Squid) {}

  /* Inserts new user data into the 'users' collection */
  async insertNewUser(): Promise<void> {
    const projectId = crypto.randomUUID();
    const projectName = `Test Project`;
    const managerName = "Manager Name";

    await this.squid
      .collection<Project>('projects')
      .doc(projectId)
      .insert({
        id: projectId,
        projectName : projectName,
        managerName: managerName
      });
  }
}
