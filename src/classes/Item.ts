export enum EnumItemType {
    הדפסה = "הדפסה",
    תליה = "תליה",
    הפצה = "הפצה"
}

export enum EnumSize{
    A2="A2",A3="A3",A4="A4",A5="A5"
}


export class Item {
    constructor(
        public Id:number,
        public Type:EnumItemType,
        public Size:EnumSize,
        public MinPrice:number,
        public MaxPrice:number,
        public Amount?:number) { }

}
