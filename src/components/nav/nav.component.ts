import { Component, inject, model } from '@angular/core';
import { MyButtonComponent } from "../my-button/my-button.component";
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderStatusDialogComponent } from '../order-status-dialog/order-status-dialog.component';
import { statusService } from '../../services/status.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public RouterToStatus:Router,public dataStatus:statusService){}
  readonly code=model('');
  readonly dialog = inject(MatDialog);

  openD(){
    if(this.dataStatus.codeOrder == undefined){
      this.openDialog();
    }
    else if(this.dataStatus.codeOrder == "123456")
      this.RouterToStatus.navigate(["tables"]);
    else 
      this.RouterToStatus.navigate(["status"]);
  }
  openDialog(): void {
    if(this.dataStatus.codeOrder == undefined){}
    const dialogRef = this.dialog.open(OrderStatusDialogComponent, {
      data: {code: this.code()},
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.dataStatus.codeOrder=result;
        if(this.dataStatus.codeOrder == "123456")
          this.RouterToStatus.navigate(["tables"]);
        else if(this.dataStatus.codeOrder == "#####")
        // כאן נבדוק אם הקוד קיים בשרת
          this.RouterToStatus.navigate(["status"]);
    //     else 
          
     }
  })
}}
