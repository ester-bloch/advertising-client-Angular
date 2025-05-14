export class User{
    private static _nextId = 1;

    public id: number;
    constructor(
        public name?:string,
        public phone?:string,
        public email?:string
    ){
        this.id = User._nextId++;

    }
}