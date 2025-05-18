import { Component, Input } from '@angular/core';
import { TableService } from '../../services/table.service';
import { User } from '../../classes/User';
import { EnumStatus, Massage } from '../../classes/Massage';
import { MyButtonComponent } from '../my-button/my-button.component';

@Component({
  selector: 'app-table',
  imports: [MyButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() titles:Array<string>=new Array<string>
  @Input() users?:Array<User>=[]
  @Input() massages?:Array<Massage>=[]
  EnumStatus = EnumStatus;
  updateStatus(id:number){
    if(!this.massages)return;
    let i=this.massages.findIndex(x=>x.id==id)
    if(i !== -1 && this.massages[i].status==EnumStatus.newT){
      this.massages[i].status=EnumStatus.InTreatment;
    }
    else if(i !== -1 && this.massages[i].status==EnumStatus.InTreatment){
      this.massages[i].status=EnumStatus.Treated;
    }
    
  }
}
