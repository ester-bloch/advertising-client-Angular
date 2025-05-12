import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../components/nav/nav.component";
import { ContactComponent } from "../components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advertising';
}
