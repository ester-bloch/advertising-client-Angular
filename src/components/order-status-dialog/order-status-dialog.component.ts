import { Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-order-status',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './order-status-dialog.component.html',
  styleUrl: './order-status-dialog.component.css'
})
export class OrderStatusDialogComponent {
  readonly dialogRef = inject(MatDialogRef<OrderStatusDialogComponent>);
  readonly data = inject<NavComponent>(MAT_DIALOG_DATA);
  readonly code = model(this.data.code);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
