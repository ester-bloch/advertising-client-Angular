import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MassageService } from '../../services/massage.service';
import { Massage } from '../../classes/Massage';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
