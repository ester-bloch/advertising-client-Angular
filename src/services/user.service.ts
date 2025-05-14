import { Injectable } from '@angular/core';

import {User} from '../classes/User'

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(){
    }
    thisUser:User=new User
    users:Array<User>=new Array<User>()
}