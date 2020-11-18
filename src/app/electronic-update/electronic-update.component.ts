import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElectronicService } from '../services/electronic.service';

@Component({
  selector: 'app-electronic-update',
  templateUrl: './electronic-update.component.html',
  styleUrls: ['./electronic-update.component.css']
})
export class ElectronicUpdateComponent implements OnInit {
  electronicRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    price:new FormControl()
  });

  constructor(public electronicService:ElectronicService) { }
  result:string;
  ngOnInit(): void {
  }
updateElectronicDetails(): void {
this.electronicService.updateElectronic(this.electronicRef.value).subscribe(data=>this.result=data.msg)
}
}
