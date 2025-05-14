import { Injectable } from '@angular/core';
import { EnumItemType, EnumSize, Item } from '../classes/Item';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {
    this.availableItems.push(new Item(1,EnumItemType.הדפסה, EnumSize.A2, 1, 8,200))
    this.availableItems.push(new Item(2,EnumItemType.הדפסה, EnumSize.A3, 0.25, 1,200))
    this.availableItems.push(new Item(3,EnumItemType.הדפסה, EnumSize.A4, 0.12, 0.30,200))
    this.availableItems.push(new Item(4,EnumItemType.הדפסה, EnumSize.A5, 0.1, 0.20,200))
    this.availableItems.push(new Item(5,EnumItemType.תליה, EnumSize.A3, 2, 2.5,200))
    this.availableItems.push(new Item(6,EnumItemType.תליה, EnumSize.A4, 1.5, 2,200))
    this.availableItems.push(new Item(7,EnumItemType.תליה, EnumSize.A5, 1.4, 1.9,200))
    this.availableItems.push(new Item(8,EnumItemType.הפצה, EnumSize.A3, 0.3, 0.35,200))
    this.availableItems.push(new Item(9,EnumItemType.הפצה, EnumSize.A4, 0.25, 0.30,200))
    this.availableItems.push(new Item(10,EnumItemType.הפצה, EnumSize.A5, 0.2, 0.25,200))
  }
  SumToPay: number = 0
  availableItems: Array<Item> = new Array<Item>()
  chosenItems: Array<Item> = new Array<Item>()
calcSumToPay(){
  this.SumToPay=0
   this.chosenItems.forEach(y=>{
    let num=this.calcPrice(y.amount,y.maxPrice,y.minPrice)
      this.SumToPay+=num;
   })

}
 calcPrice(quantity:number=200, high:number, low:number) {
  if (quantity < 200) return high;
  if (quantity > 10000) return low;
  const ratio = (quantity - 200) / (10000 - 200);
  return (high - ratio * (high - low))*quantity;
}
}
