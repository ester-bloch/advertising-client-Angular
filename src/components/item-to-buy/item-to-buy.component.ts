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
export class ItemToBuyComponent implements OnInit{
  constructor(public calculatorService: CalculatorService) {
    this.item = calculatorService.chosenItems[0];
  }
  ngOnInit(): void {
    if(this.item.type!=EnumItemType.הדפסה){
    this.calculatorService.chosenItems.forEach(i=>{
      if(i.type==EnumItemType.הדפסה && i.size==this.item.size){
        this.blocked=true
        this.ValueForBlocked=i.amount
      }
    })
    }
  }
  blocked:boolean=false;
  ValueForBlocked:number|undefined =200
  @Input() item: Item
  @Input() picName?: string
  @Output() OnQantityChange = new EventEmitter();
  onCange() {
    this.OnQantityChange.emit();
  }
  remove() {
    this.calculatorService.chosenItems =
      this.calculatorService.chosenItems.filter(i => i != this.item);
    this.calculatorService.calcSumToPay ()
  }
  onQuantityChange(value: string) {
    console.log(value)
    const numericValue = parseFloat(value);
    this.item.amount = numericValue;
    this.calculatorService.calcSumToPay()
  if(this.OnQantityChange)
    this.OnQantityChange.emit();
  }
}
