import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-footer',
  imports: [ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  display:boolean=false;
  save(){
    //כאן צריך פניה לקונטרולר
    this.display=false
  }
  openC(){
    this.display=true
  }
}
