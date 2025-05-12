import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() textToShow?: string
  @Input() backgroundColor?: string
  @Input() iconName?: string
  @Input() myType?: string
  @Output() myOnClick= new EventEmitter();
  
  handleClick() {
    this.myOnClick.emit();
  }
}