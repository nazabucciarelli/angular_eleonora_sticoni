import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  template: `
  <h1 mat-dialog-title>Alerta</h1>
  <div mat-dialog-content>
    <p>{{ message }}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="closeDialog()">Cerrar</button>
  </div>
`,
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {
  message?: string;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
