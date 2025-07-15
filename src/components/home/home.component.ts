import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToSendMassageComponent } from "../to-send-massage/to-send-massage.component";
import { ImageLoopComponent } from "../image-loop/image-loop.component";
import { orderService } from '../../services/order.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ToSendMassageComponent, ImageLoopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countOrders: number;

  constructor(public orderData: orderService) {
    this.countOrders = this.orderData.countOrders;
  }
}
