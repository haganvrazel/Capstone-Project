import { Component, OnInit } from '@angular/core';
import { Electronic } from '../models/electronic';
import { ElectronicService } from '../services/electronic.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics: Electronic[];

  constructor(private electronicService: ElectronicService) { }

  ngOnInit(): void {
    this.electronicService.getElectronics().subscribe(result => {
      this.electronics = result;
      console.log(this.electronics);
    })
  }

}
