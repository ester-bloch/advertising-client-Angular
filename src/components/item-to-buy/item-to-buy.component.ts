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
    if (this.item.Type != e) {
      this.calculatorService.chosenItems.forEach(i => {
        if (i.Type == EnumItemType.הדפסה && i.Size == this.item.Size && this.item != i) {
          this.blocked = true
          this.item.Amount=i.Amount
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
    if (this.item.Type == EnumItemType.הדפסה) {
      this.calculatorService.chosenItems.forEach(i => {
        if (i.Size == this.item.Size && i != this.item) {
          this.calculatorService.chosenItems.sort((a: Item, b: Item) => this.calculatorService.availableItems.indexOf(a) - this.calculatorService.availableItems.indexOf(b))
          i.Amount = this.item.Amount
        }
      })
    }
    this.calculatorService.calcSumToPay()
    if (this.OnQantityChange)
      this.OnQantityChange.emit();
  }
}
