import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../classes/Item';
import { CalculatorService } from '../../services/calculator-service.service';
@Component({
  selector: 'app-my-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  constructor(public calculatorService: CalculatorService) {
    this.item = calculatorService.chosenItems[0];
  }
  @Input() textToShow?: string
  @Input() myType?: string
  @Input() item: Item
  @Output() myOnChange = new EventEmitter<number>();
  public showError: boolean = false


  handleClick() {
    this.myOnChange.emit();
  }
  checkValue() {
    if (this.item.amount!<200) {
      this.item.amount = 200;
      this.showError = true;
    } else {
      this.myOnChange.emit();
      this.showError = false;
    }
  }
}