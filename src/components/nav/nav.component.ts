import { Component, inject, model } from '@angular/core';
import { MyButtonComponent } from "../my-button/my-button.component";
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderStatusDialogComponent } from '../order-status-dialog/order-status-dialog.component';
import { orderService } from '../../services/order.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public RouterToStatus:Router,public dataOrder:orderService ){}
  readonly code=model('');
  readonly dialog = inject(MatDialog);

  openD(){
    if(this.dataOrder.codeOrder == undefined){
      this.openDialog();
    }
    else if(this.dataOrder.codeOrder == "123456")
      this.RouterToStatus.navigate(["tables"]);
    else 
      this.RouterToStatus.navigate(["status"]);
  }
  openDialog(): void {
    if(this.dataOrder.codeOrder == undefined){}
    const dialogRef = this.dialog.open(OrderStatusDialogComponent, {
      data: {code: this.code()},
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.dataOrder.codeOrder=result;
        if(this.dataOrder.codeOrder == "123456")
          this.RouterToStatus.navigate(["tables"]);
        else if(this.dataOrder.codeOrder == "#####")
        // כאן נבדוק אם הקוד קיים בשרת
          this.RouterToStatus.navigate(["status"]);
    //     else 
          
     }
  })
}}
