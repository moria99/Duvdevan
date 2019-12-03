import { Time } from "@angular/common";

class OrderDetails {

    public street: string;
    public houseNumber: number;
    public city: string;
    public date: Date;
    public time: Time;
    public castingType: string;
    public quantity: number;
    public isPlus:boolean;
    public isConcrete: boolean;
    public concreteType: string;
    public isAdvanced: boolean;
    public advancedType1: string;
    public advancedType2: string;
    public advancedType3: string;
    public advancedType4: string;
    public advancedType5: string;
    public isPump: boolean;
    public pumpType: string;
    public isRubberHose: boolean;
    public hoseLength: number

    constructor(street: string, houseNumber: number, city: string,
        date: Date, time: Time, castingType: string, quantity: number,isPlus:boolean,
        isConcrete: boolean, concreteType: string, isAdvanced: boolean,
        advancedType1: string, advancedType2: string, advancedType3: string, advancedType4: string, advancedType5: string,
        isPump: boolean, pumpType: string, isRubberHose: boolean, hoseLength: number) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.date = date;
        this.time = time;
        this.castingType = castingType;
        this.quantity = quantity;
        this.isPlus=isPlus;
        this.isConcrete = isConcrete;
        this.concreteType = concreteType;
        this.isAdvanced = isAdvanced;
        this.advancedType1 = advancedType1;
        this.advancedType2 = advancedType2;
        this.advancedType3 = advancedType3;
        this.advancedType4 = advancedType4;
        this.advancedType5 = advancedType5;
        this.isPump = isPump;
        this.pumpType = pumpType;
        this.isRubberHose = isRubberHose;
        this.hoseLength = hoseLength;
    }
}

export { OrderDetails }