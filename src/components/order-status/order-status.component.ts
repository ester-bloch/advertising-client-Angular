import { Component, OnInit } from '@angular/core';
import { orderService } from '../../services/order.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-status',
  imports: [RouterLink],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent implements OnInit {

  status: string = '';

  constructor(public dataOrder: orderService) {}

  ngOnInit(): void {
    this.status = this.dataOrder.currentOrder?.Status || '';
  }

}