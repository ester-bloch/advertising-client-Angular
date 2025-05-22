import { Injectable } from '@angular/core';
import { ApiService } from './server/api.service';
import { Order } from '../classes/Order';

@Injectable({
    providedIn:'root'
})
export class orderService{
    constructor(private ApiService: ApiService) {
        ApiService.getAllOrders().subscribe(
            data=>{this.orders=data},
            err=>{console.log(err)}
        )
    }
    deleteOrder(orderId:number){
        this.ApiService.deleteOrder(orderId).subscribe()
    }
    addOrder(order:Order){
        this.ApiService.postOrder(order).subscribe(
            data => {},
            err=> {console.log(err)}
        )
    }
    updateOrder(oldOrder:Order,status:string){
        let order=oldOrder;
        order.Status=status;
        this.ApiService.putOrder(oldOrder.Id,order).subscribe(
            data => {console.log("updateOrder")},
            err=> {console.log(err)}
        )
    }
    getCountOrders(){
        this.ApiService.getCountOrders().subscribe(
            data => {this.countOrders=data},
            err=>{console.log(err)}
        )
    }
    codeOrder?:string
    orders:Array<Order>=new Array<Order>()
    countOrders:number=0
}