import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class TableService{
    constructor(){
        
    }
    titleUsersTable:Array<string>=["שם","טלפון","מייל"]
    titleMassageTable:Array<string>=["שם","טלפון","מייל","הודעה","מצב הפניה","מחק"]
    titleOrderTable:Array<string>=["שם","טלפון","מייל","פרטי הזמנה","סכום לתשלום","עדכון סטטוס הזמנה","מחיקת הזמנה"]
    
}