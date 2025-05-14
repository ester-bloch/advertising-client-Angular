import { Injectable } from '@angular/core';
import { EnumItemType, EnumSize, Item } from '../classes/Item';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {
    this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A2, 1, 8))
    this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A3, 0.25, 1))
    this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A4, 0.12, 0.30))
    this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A5, 0.1, 0.20))
    this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A3, 2, 2.5))
    this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A4, 1.5, 2))
    this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A5, 1.4, 1.9))
    this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A3, 0.3, 0.35))
    this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A4, 0.25, 0.30))
    this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A5, 0.2, 0.25))
  }
  SumToPay: number = 0
  availableItems: Array<Item> = new Array<Item>()
  chosenItems: Array<Item> = new Array<Item>()
calcSumToPay(){
  this.SumToPay=0
   this.chosenItems.forEach(y=>{
    let num=this.calcPrice(y.amount,y.maxPrice,y.minPrice)
      this.SumToPay+=num;
      console.log(this.SumToPay)
   })

}
 calcPrice(quantity:number=200, high:number, low:number) {
  if (quantity < 200) return high;
  if (quantity > 10000) return low;
  const ratio = (quantity - 200) / (10000 - 200);
  return (high - ratio * (high - low))*quantity;
}
}
