import { Time } from "@angular/common";

class OrderDetails {
    //לתקן!
    public userAdress: {
        street: string,
        houseNumber: number,
        city: string
    }
    public date: Date;
    public time: Time;
    public castingType: string;
    public quantity: number;
    public isConcrete: boolean;
    public concreteType: string;
    public isPump: boolean;
    public pumpType: string;
    public isRubberHose: boolean;
    public hoseLength: number

    constructor(street: string, houseNumber: number, city: string, date: Date, time: Time, castingType: string, quantity: number, isConcrete: boolean, concreteType: string, isPump: boolean, pumpType: string, isRubberHose: boolean, hoseLength: number) {
        this.userAdress;
        this.date = date;
        this.time = time;
        this.castingType = castingType;
        this.quantity = quantity;
        this.isConcrete = isConcrete;
        this.concreteType = concreteType;
        this.isPump = isPump;
        this.pumpType = pumpType;
        this.isRubberHose = isRubberHose;
        this.hoseLength = hoseLength;
    }
}

export { OrderDetails }