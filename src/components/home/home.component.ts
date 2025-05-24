import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToSendMassageComponent } from "../to-send-massage/to-send-massage.component";
import { ImageLoopComponent } from "../image-loop/image-loop.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ToSendMassageComponent, ImageLoopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
