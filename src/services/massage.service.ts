import { ApiService } from './server/api.service';
import { Massage, EnumStatus } from './../classes/Massage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MassageService{
    constructor(private ApiService: ApiService) {
        ApiService.getAllMassages().subscribe(
            data => {this.massages = data},
            err=> {console.log(err)}
        )
    }
    deleteMassage(massageId:number){
        this.ApiService.deleteMassage(massageId).subscribe()
    }
    addMassage(massage:Massage){
        this.ApiService.postMassage(massage).subscribe(
            data => {},
            err=> {console.log(err)}
        )
    }
    updateMassage(oldMassage:Massage,status:EnumStatus){
        let massage=oldMassage;
        massage.Status=status;
        this.ApiService.putMassage(oldMassage.Id,massage).subscribe(
            data => {console.log("updateMassage")},
            err=> {console.log(err)}
        )
    }
    massages:Array<Massage>=new Array<Massage>()
}