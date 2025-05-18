import { Component, OnInit } from '@angular/core';
import { statusService } from '../../services/status.service';

@Component({
  selector: 'app-order-status',
  imports: [],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {

  constructor(public dataStatus: statusService) {}



}