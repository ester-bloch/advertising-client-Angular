import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  @Input() textToShow?: string
  @Input() valueToPut: number | undefined | null
  @Input() myType?: string
  @Output() myOnChange = new EventEmitter();

  handleClick() {
    this.myOnChange.emit();
  }
  checkValue(value: string) {
    const numericValue = parseFloat(value);
    if (numericValue < 200) {
      this.valueToPut = 200;
      this.showError = true;
    } else {
      this.showError = false;
      this.valueToPut = numericValue;
    }
  }
  public showError: boolean = false
}