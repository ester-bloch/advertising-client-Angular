import { Injectable } from '@angular/core';
import { User } from '../classes/User'
import { ApiService } from './server/api.service';


@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private ApiService: ApiService) {
        ApiService.getAllUsers().subscribe(
            data=>{this.users=data},
            err=>{console.log(err)}
        )
    }
    thisUser:User=new User
    users:Array<User>=new Array<User>()
}