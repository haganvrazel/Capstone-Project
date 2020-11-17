import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ElectronicService } from '../services/electronic.service';

@Component({
  selector: 'app-electronic-store',
  templateUrl: './electronic-store.component.html',
  styleUrls: ['./electronic-store.component.css'],
})
export class ElectronicStoreComponent implements OnInit {
  electronicRef = new FormGroup ({
    _id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
  });

  constructor(public electronicService: ElectronicService) {} //DI for Service layer
  result: string;
  ngOnInit(): void {}

  storeProductDetails(): void {
    //console.log(this.productRef.value);
    this.electronicService.addElectronic(this.electronicRef.value)
      .subscribe((data) => (this.result = data.msg));
  }
}
