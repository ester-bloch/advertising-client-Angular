export enum EnumItemType {
    הדפסה = "הדפסה",
    תליה = "תליה",
    הפצה = "הפצה"
}

export enum EnumSize{
    A2="A2",A3="A3",A4="A4",A5="A5"
}


export class Item {
    constructor(public type:EnumItemType,public size:EnumSize, public minPrice:number,public maxPrice:number,public amount?:number) { }
}
