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
    getOrderById(){
        if(this.codeOrder==-1) return;
        this.ApiService.getOrderById(this.codeOrder).subscribe(
            data => {this.currentOrder=data},
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
    updateOrder(order:Order,status:string){
        order.Status=status;
        this.ApiService.putOrder(order.Id,order).subscribe(
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
    currentOrder?:Order;
    codeOrder:number=-1;
    orders:Array<Order>=[]
    countOrders:number=0
}