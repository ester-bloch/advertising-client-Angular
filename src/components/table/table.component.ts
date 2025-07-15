import { Component, Input } from '@angular/core';
import { TableService } from '../../services/table.service';
import { User } from '../../classes/User';
import { EnumStatus, Massage } from '../../classes/Massage';
import { MyButtonComponent } from '../my-button/my-button.component';
import { orderService } from '../../services/order.service';
import { MassageService } from '../../services/massage.service';
import { Order } from '../../classes/Order';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  imports: [MyButtonComponent,GenericDialogComponent,MatDialogModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(public massageSer:MassageService ,public orderSer:orderService,public dialog: MatDialog,){}
  @Input() titles:Array<string>=new Array<string>
  @Input() users?:Array<User>=[]
  @Input() massages?:Array<Massage>=[]
  @Input() orders?:Array<Order>=[];
  EnumStatus = EnumStatus;
  
  updateStatus(massage:Massage){
    if(!massage.Id)return;
    if(massage.Status==EnumStatus.newT){
      this.massageSer.updateMassage(massage,EnumStatus.InTreatment); 
    }
    else if(massage.Status==EnumStatus.InTreatment){
      this.massageSer.updateMassage(massage,EnumStatus.Treated); 

    }
    
  }
  deleteMassage(massage:Massage){
    if(!massage.Id)return;
      this.massageSer.deleteMassage(massage.Id);
    }
  
  openEditDialog(order: any) {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: {
        title: 'עריכת סטטוס ההזמנה',
        value: order.status,
        editable: true
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        //order.status = result;
        this.orderSer.updateOrder(order,result);
        
      }
    });
  }
  deleteOrder(id:number){
    if(!this.orders)return;
    let i=this.orders.findIndex(x=>x.Id==id)
    if(i !== -1){
      this.orderSer.deleteOrder(id);
    }
  }
  openViewDialog(order: any) {
    this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: {
        title: 'פרטי ההזמנה',
        value: order.OrderItems.map((item: { Amount: number; Size: string; Type: string }) => `יחידות${item.Amount} - ${item.Size} - ${item.Type}`).join('\n '),
        editable: false
      }
    });
  }
}
