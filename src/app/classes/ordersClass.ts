import { Time } from "@angular/common";

class OrderDetails {

    public userAddress: string;
    public date: Date;
    public time: Time;
    public sugYetzikaKodParit: string;
    public quantity: number;
    public plus: string;
    public pritimBetonKodParit: string;
    public pritimMashevaKodParit: string;
    public hoseLength: number

    constructor(userAddress: string,
        date: Date, time: Time,
        sugYetzikaKodParit: string,
        quantity: number, plus: string,
        pritimBetonKodParit: string,
        pritimMashevaKodParit: string, hoseLength: number) {

        this.userAddress = userAddress;
        this.date = date;
        this.time = time;
        this.sugYetzikaKodParit = sugYetzikaKodParit;
        this.quantity = quantity;
        this.plus = plus;
        this.pritimBetonKodParit = pritimBetonKodParit;
        this.pritimMashevaKodParit = pritimMashevaKodParit;
        this.hoseLength = hoseLength;
    }
}

export { OrderDetails }