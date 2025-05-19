import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../components/nav/nav.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AllTheTablesComponent } from '../components/all-the-tables/all-the-tables.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, AllTheTablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advertising';
}
