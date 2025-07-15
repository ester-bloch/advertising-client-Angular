import { User } from "./User";

export enum EnumStatus{
    newT="חדש",InTreatment="בטיפול",Treated="טופל"
}

export class Massage{
    constructor(
        
        public User:User,
        public Massage?:string,
        public Status:EnumStatus=EnumStatus.newT,
        public Id?:number,
    ){}
}