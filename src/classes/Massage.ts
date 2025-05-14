import { User } from "./User";

export enum EnumStatus{
    newT="חדש",InTreatment="בטיפול",Treated="טופל"
}

export class Massage{
    private static _nextId = 1;

    public id: number;

    constructor(
        public user?:User,
        public massage?:string,
        public status:EnumStatus=EnumStatus.newT
    ){
        this.id = Massage._nextId++;
    }
}