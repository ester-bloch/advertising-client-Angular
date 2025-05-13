import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator-service.service';
import { CalaulatorNavComponent } from "../calaulator-nav/calaulator-nav.component";
import { ItemToBuyComponent } from "../item-to-buy/item-to-buy.component";
import { Item } from '../../clases/Item';

@Component({
  selector: 'app-calculator',
  imports: [CalaulatorNavComponent, ItemToBuyComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

constructor(public calcService:CalculatorService) {}
changeQuantity(item:Item,ammount:Number) {

} 
}


