import { Component } from '@angular/core';
import { MyButtonComponent } from "../my-button/my-button.component";

@Component({
  selector: 'app-nav',
  imports: [MyButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
