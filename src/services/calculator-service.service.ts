import { Injectable } from '@angular/core';
import { EnumItemType, EnumSize, Item } from '../classes/Item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './server/api.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private apiService: ApiService) {
    apiService.getAllItems().subscribe(
      data=>{
        this.availableItems=data;
      },
      err=>{
        console.log(err)
      }
    )
  }
    // this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A2, 1, 8))
    // this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A3, 0.25, 1))
    // this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A4, 0.12, 0.30))
    // this.availableItems.push(new Item(EnumItemType.הדפסה, EnumSize.A5, 0.1, 0.20))
    // this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A3, 2, 2.5))
    // this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A4, 1.5, 2))
    // this.availableItems.push(new Item(EnumItemType.תליה, EnumSize.A5, 1.4, 1.9))
    // this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A3, 0.3, 0.35))
    // this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A4, 0.25, 0.30))
    // this.availableItems.push(new Item(EnumItemType.הפצה, EnumSize.A5, 0.2, 0.25))

  SumToPay: number = 0
  availableItems: Array<Item> = new Array<Item>()
  chosenItems: Array<Item> = new Array<Item>()
  calcSumToPay(){
  this.SumToPay=0
   this.chosenItems.forEach(y=>{
    let num=this.calcPrice(y.Amount,y.MaxPrice,y.MinPrice)
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
updatePrice(oldItem:Item,minPrice:number,maxPrice:number){
  let item=oldItem;
  item.MinPrice=minPrice;
  item.MaxPrice=maxPrice;
  this.apiService.putItem(oldItem.Id,item).subscribe(
    data=>{
      console.log(data)
    },
    err=>{
      console.log(err)
    }
  )
  

}
}
