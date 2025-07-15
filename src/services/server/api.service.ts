import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../classes/Item';
import { Massage } from '../../classes/Massage';
import { User } from '../../classes/User';
import { Order } from '../../classes/Order';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost/api/'; 

  constructor(private http: HttpClient) {}

  getAllItems():Observable<Array<Item>>{
    return this.http.get<Array<Item>>(`${this.baseUrl}/items`);	
  }
  putItem(itemId:number,item:Item):Observable<Item>{
    return this.http.put<Item>(`${this.baseUrl}/items/${itemId}`, item);
  }
  getAllUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(`${this.baseUrl}/users`);	
  }

  getAllMassages():Observable<Array<Massage>>{
    return this.http.get<Array<Massage>>(`${this.baseUrl}/massages`);	
  }
  putMassage(massageId:number,massage:Massage):Observable<Massage>{
    return this.http.put<Massage>(`${this.baseUrl}/massages/${massageId}`, massage);
  }
  postMassage(massage:Massage):Observable<Massage>{
    return this.http.post<Massage>(`${this.baseUrl}/massages`, massage);
  }
  deleteMassage(massageId:number):Observable<Massage>{
    return this.http.delete<Massage>(`${this.baseUrl}/massages/${massageId}`);
  }
  getAllOrders():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(`${this.baseUrl}/orders`);	
  }
  getOrderById(id:number):Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/orders/${id}`);
  }
  getCountOrders():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/orders/count`);
  }
  putOrder(orderId:number,order:Order):Observable<Order>{
    return this.http.put<Order>(`${this.baseUrl}/orders/${orderId}`, order);
  }
  postOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(`${this.baseUrl}/orders`, order);
  }
  deleteOrder(orderId:number):Observable<Order>{
    return this.http.delete<Order>(`${this.baseUrl}/orders/${orderId}`);
  }

}