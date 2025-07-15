import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  imports: [FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule],
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html'
})
export class GenericDialogComponent {
  currentValue: string;

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, value: string, editable: boolean }
  ) {
    this.currentValue = data.value;
  }

  save() {
    this.dialogRef.close(this.currentValue);
  }

  close() {
    this.dialogRef.close();
  }
}
