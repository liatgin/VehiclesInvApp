import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CAR_TYPE } from '../vehicle/vehicle.component';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  idFormControl = new FormControl('', []);
  nameFormControl = new FormControl('', [Validators.required]);
  carTypeFormControl = new FormControl('', [Validators.required]);
  timeCreatedFormControl = new FormControl('', [Validators.required]);
  lastSuccessfulConnectionFormControl = new FormControl('', [Validators.required]);
  disabled = true;
  id: string;
  name: string;
  car_type: CAR_TYPE;
  time_created: string;
  last_successful_connection: string;


  constructor(public dialogRef: MatDialogRef<EditVehicleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.car_type = data.car_type;
      this.last_successful_connection = data.last_successful_connection;
      this.time_created = data.time_created;
    }
  }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    const vehicleData = {
      id: this.id,
      name: this.name,
      car_type: this.car_type,
      time_created: this.time_created,
      last_successful_connection: this.last_successful_connection,
    };

    this.dialogRef.close(vehicleData);
  }
}
