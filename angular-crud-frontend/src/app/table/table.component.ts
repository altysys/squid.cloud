import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
  <div style="width:800px">
    <table>
      <div id="theader">
        <thead>
          <th><input id="input-project" name="input-project" type="text" placeholder="Enter Project Name" [(ngModel)]="projectName" /></th>
          <th><input id="input-manager" name="input-manager" type="text" placeholder="Enter Project Manager" [(ngModel)]="managerName" /></th>
        </thead>
        <insert-project />
      </div>
      <read-projects />
    </table></div>
  `,
})
export class TableComponent {
  projectName: string | undefined;
  managerName: string | undefined;
}
