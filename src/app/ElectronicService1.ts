import { Injectable } from '@angular/core';

import { Electronic } from './models/electronic';

@Injectable()
export class ElectronicService1 {

    private electronics: Electronic[];

    constructor() {
        this.electronics= [
            { _id: '100', name: 'Washing Machine', price: 110000},
            { _id: '101', name: 'iPhone X', price: 55000},
            { _id: '102', name: 'Razor Laptop', price: 85000}
        ];
    }

    findAll(): Electronic[] {
        return this.electronics;
    }

    find(id: string): Electronic {
        return this.electronics[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.electronics.length; i++) {
            if (this.electronics[i]._id == id) {
                return i;
            }
        }
        return -1;
    }

}