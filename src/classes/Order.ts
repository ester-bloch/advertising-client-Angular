import { Item } from "./Item";
import { User } from "./User";

export class Order{
    constructor(
        public Id:number,
        public User:User,
        public SumToPay:number,
        public IsPaid:boolean,
        public OrderItems:Array<Item>,
        public Status:string="הזמנה חדשה",
    ){}
}