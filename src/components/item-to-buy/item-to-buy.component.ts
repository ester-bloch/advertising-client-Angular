import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';
import { MyButtonComponent } from "../my-button/my-button.component";
import { CalculatorService } from '../../services/calculator-service.service';
import { EnumItemType, Item } from '../../classes/Item';
import { MyInputComponent } from "../my-input/my-input.component";

@Component({
  selector: 'app-item-to-buy',
  imports: [MyButtonComponent, MyInputComponent],
  templateUrl: './item-to-buy.component.html',
  styleUrl: './item-to-buy.component.css'
})
export class ItemToBuyComponent implements OnInit {
  constructor(public calculatorService: CalculatorService) {
    this.item = calculatorService.chosenItems[0];
  }
  ngOnInit(): void {
    const e = EnumItemType.הדפסה
    if (this.item.type != e) {
      this.calculatorService.chosenItems.forEach(i => {
        if (i.type == EnumItemType.הדפסה && i.size == this.item.size && this.item != i) {
          this.blocked = true
          this.item.amount=i.amount
        }
      })
    }
  }
  blocked: boolean = false;
  @Input() item: Item
  @Input() picName?: string
  @Output() OnQantityChange = new EventEmitter();

  remove() {
    this.calculatorService.chosenItems =
      this.calculatorService.chosenItems.filter(i => i != this.item);
    this.calculatorService.calcSumToPay()
  }
  onQuantityChange() {
    if (this.item.type == EnumItemType.הדפסה) {
      this.calculatorService.chosenItems.forEach(i => {
        if (i.size == this.item.size && i != this.item) {
          this.calculatorService.chosenItems.sort((a: Item, b: Item) => this.calculatorService.availableItems.indexOf(a) - this.calculatorService.availableItems.indexOf(b))
          i.amount = this.item.amount
        }
      })
    }
    this.calculatorService.calcSumToPay()
    if (this.OnQantityChange)
      this.OnQantityChange.emit();
  }
}
