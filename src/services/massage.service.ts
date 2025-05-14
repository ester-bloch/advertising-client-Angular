import { Massage } from './../classes/Massage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MassageService{
    constructor(){
    }
    massages:Array<Massage>=new Array<Massage>()
}