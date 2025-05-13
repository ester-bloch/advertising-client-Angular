import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { MyButtonComponent } from "../my-button/my-button.component";
import { CalculatorService } from '../../services/calculator-service.service';
import { Item } from '../../clases/Item';
import { MyInputComponent } from "../my-input/my-input.component";

@Component({
  selector: 'app-item-to-buy',
  imports: [MyButtonComponent, MyInputComponent],
  templateUrl: './item-to-buy.component.html',
  styleUrl: './item-to-buy.component.css'
})
export class ItemToBuyComponent {
  /**
   *
   */
  constructor(public calculatorService:CalculatorService) { 
    this.item=calculatorService.chosenItems[0];
   }
  @Input() item: Item
  @Input() picName?: string
  // @Input() myType?: string
  @Output() OnQantityChange = new EventEmitter();
  onCange() {
    this.OnQantityChange.emit();
  }
  remove(){
    this.calculatorService.chosenItems= 
     this.calculatorService.chosenItems.filter(i=>i!=this.item)
  }

}
