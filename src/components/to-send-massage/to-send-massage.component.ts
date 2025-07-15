import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { Massage } from '../../classes/Massage';
import { MassageService } from '../../services/massage.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-to-send-massage',
  imports: [ContactComponent,FormsModule,RouterLink],
  templateUrl: './to-send-massage.component.html',
  styleUrl: './to-send-massage.component.css'
})
export class ToSendMassageComponent {
constructor(public dataMassage:MassageService,public dataUser:UserService){}
  mass:string="";
  sand:boolean=false;
  save(){
    this.dataMassage.addMassage(new Massage(this.dataUser.thisUser,this.mass));
    //this.dataMassage.massages.push(new Massage(this.dataUser.thisUser.Id,this.mass))
    // this.dataUser.users.push(this.dataUser.thisUser)
    this.sand=true;
  }
}
