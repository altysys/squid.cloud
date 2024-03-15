import { Component, Input } from '@angular/core';
import { Squid } from '@squidcloud/client';

type Project = { id: string; projectName: string; managerName: string };

@Component({
  selector: 'update-project',
  template: `
    <form name="form" (ngSubmit)="updateUser()">
      <input id="input-project" name="input-project" type="text" placeholder="Enter Project Name" [(ngModel)]="projectName" />
      <input id="input-manager" name="input-manager" type="text" placeholder="Enter Project Manager" [(ngModel)]="managerName" />
      <button>Update Project</button>
    </form>
  `,
  styleUrls: ['./update-project.component.scss'],
})
export class UpdateProjectComponent {
  @Input() id = '';

  constructor(private readonly squid: Squid) {}

  projectName: string | undefined;
  managerName: string | undefined;

  /* Accesses the user document with the specified inputId and updates their age */
  async updateUser(): Promise<void> {
    
      await this.squid.collection<Project>('projects').doc(this.id).update({
        projectName: this.projectName,
        managerName: this.managerName,
      });
    
  }
}
