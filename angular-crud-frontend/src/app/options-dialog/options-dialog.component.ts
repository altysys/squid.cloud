import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'options-dialog',
  template: `
    <div id="container">
      <div id="header">
        <h3>Project Id</h3>
        <button (click)="onExitClick()" id="exit">X</button>
      </div>
      <div>{{ data.id }}</div>
      <update-project [id]="data.id" />
      <delete-project [id]="data.id" (click)="onExitClick()" />
    </div>
  `,
  styleUrls: ['./options-dialog.component.scss'],
})
export class OptionsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
  ) {}

  onExitClick(): void {
    this.dialogRef.close();
  }
}
