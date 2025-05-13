import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-button',
  imports: [CommonModule,RouterLink],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() textToShow?: string
  @Input() routerLink: string|null|undefined
  @Input() backgroundColor?: string
  @Input() iconName?: string
  @Input() myType?: string
  @Output() myOnClick= new EventEmitter();
  
  handleClick() {
    this.myOnClick.emit();
  }
}