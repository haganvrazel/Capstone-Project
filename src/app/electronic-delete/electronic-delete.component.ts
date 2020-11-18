import { Component, OnInit } from '@angular/core';
import { ElectronicService } from '../services/electronic.service';

@Component({
  selector: 'app-electronic-delete',
  templateUrl: './electronic-delete.component.html',
  styleUrls: ['./electronic-delete.component.css']
})
export class ElectronicDeleteComponent implements OnInit {

  constructor(public electronicService:ElectronicService) { }//DI for Service 
  result:string;
  ngOnInit(): void {
  }

  deleteElectronic(electId){
    this.electronicService.deleteElectronicById(electId).
    subscribe(data=>this.result=data.msg);
  }
}
