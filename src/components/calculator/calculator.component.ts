import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator-service.service';
import { CalaulatorNavComponent } from "../calaulator-nav/calaulator-nav.component";
import { ItemToBuyComponent } from "../item-to-buy/item-to-buy.component";
import { Item } from '../../classes/Item';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { MyButtonComponent } from "../my-button/my-button.component";

@Component({
  selector: 'app-calculator',
  imports: [CalaulatorNavComponent, ItemToBuyComponent, FormsModule, CurrencyPipe, MyButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
constructor(public calcService:CalculatorService) {}
changeQuantity(item:Item,ammount:Number) {

} 

}


