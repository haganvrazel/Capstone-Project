import { Component, OnInit } from '@angular/core';
import { ElectronicService1 } from '../ElectronicService1';
import { ElectronicItem } from '../electronicItem';

@Component({
  selector: 'app-electronic-item',
  templateUrl: './electronic-item.component.html',
  styleUrls: ['./electronic-item.component.css']
})
export class ElectronicItemComponent implements OnInit {

  electronics: ElectronicItem[];

  constructor(
    private electronicService: ElectronicService1
  ) { }

  ngOnInit(): void {
    console.log(this.electronicService.findAll());
    this.electronics = this.electronicService.findAll();
  }

}
