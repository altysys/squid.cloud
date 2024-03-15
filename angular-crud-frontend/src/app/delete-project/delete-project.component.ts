import { Component, Input } from '@angular/core';
import { Squid } from '@squidcloud/client';

type Project = { id: string; projectName: string; managerName: string };

@Component({
  selector: 'delete-project',
  template: `<div><button (click)="deleteUser()">Delete Project</button></div>`,
  styleUrls: ['./delete-project.component.scss'],
})
export class DeleteProjectComponent {
  constructor(private readonly squid: Squid) {}

  @Input() id = '';
  /* Accesses the 'users' collection and deletes the user with the specified inputId */
  async deleteUser(): Promise<void> {
    await this.squid.collection<Project>('projects').doc(this.id).delete();
  }
}
