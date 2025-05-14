import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MassageService } from '../../services/massage.service';
import { Massage } from '../../classes/Massage';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-footer',
  imports: [ContactComponent,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public dataMassage:MassageService,public dataUser:UserService){}
  mass:string="";
  display:boolean=false;
  save(){
    //כאן צריך פניה לקונטרולר
    this.display=false
    this.dataMassage.massages.push(new Massage(this.dataUser.thisUser,this.mass))
    //נעשה בדיקת תקינות האם המייל קיים c# ב
    //ואם לא- נוסיף למסד
    this.dataUser.users.push(this.dataUser.thisUser)
  }
  openC(){
    this.display=true
  }
}
