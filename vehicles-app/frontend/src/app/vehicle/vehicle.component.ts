import { Component, OnInit, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


export enum CAR_TYPE {
  SUV = 0, TRUCK, HYBRID
}

export interface Vehicle {
  id: string;
  name: string;
  timeCreated: string;
  carType: CAR_TYPE;
  lastSuccessfulConnection: string;
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
