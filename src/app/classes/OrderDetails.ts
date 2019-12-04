
import { Time } from "@angular/common";

class OrderDetails {

    public nameCustomer: string;//הכתובת-היא השם משתמש של הלקוח
    public date: Date;//תאריך
    public time: Time;//שעה
    public castingType: string;//סוג יציקה
    public quantity: number;
    public plus: boolean;
    public isConcrete: boolean;//בטון
    public concreteType: string;
    public isPump: boolean;
    public pumpType: string;//סוג משאבה
    public isRubberHose: boolean;
    public hoseLength: number;
    public status: string;
    
    constructor(nameCustomer: string, date: Date, time: Time, castingType: string, quantity: number, isConcrete: boolean, concreteType: string, isPump: boolean, pumpType: string, isRubberHose: boolean, hoseLength: number, status: string) {
        this.nameCustomer = nameCustomer;
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
        this.status = status;
    }
}

export { OrderDetails }
