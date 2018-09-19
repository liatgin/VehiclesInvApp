import { Component, OnInit, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


export enum CAR_TYPE {
  SUV = 0,
  TRUCK = 1,
  HYBRID = 2
}

export interface Vehicle {
  id: string;
  name: string;
  time_created: string;
  car_type: CAR_TYPE;
  last_successful_connection: string;
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
