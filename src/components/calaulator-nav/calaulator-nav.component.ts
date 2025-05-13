import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator-service.service';
import { MyButtonComponent } from "../my-button/my-button.component";
import { EnumItemType, Item } from '../../clases/Item';
// import { EnumItemType } from "../../clases/Item.ts"
@Component({
  selector: 'app-calaulator-nav',
  imports: [MyButtonComponent],
  templateUrl: './calaulator-nav.component.html',
  styleUrl: './calaulator-nav.component.css'
})
export class CalaulatorNavComponent implements OnInit {

  constructor(public calculatorService: CalculatorService) { }
  ngOnInit(): void {
  }
  addItem(item: Item) {
    if (!this.calculatorService.chosenItems.includes(item))
      this.calculatorService.chosenItems.push(item)
    this.calculatorService.chosenItems.sort((a:Item,b:Item)=>this.calculatorService.availableItems.indexOf(a)-this.calculatorService.availableItems.indexOf(b))
    console.log(this.calculatorService.chosenItems)

  }
}
