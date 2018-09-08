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

  idFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  carTypeFormControl = new FormControl('', [Validators.required]);
  timeCreatedFormControl = new FormControl('', [Validators.required]);
  lastSuccessfulConnectionFormControl = new FormControl('', [Validators.required]);

  id: string;
  name: string;
  carType: CAR_TYPE;
  timeCreated: string;
  lastSuccessfulConnection: string;


  constructor(public dialogRef: MatDialogRef<EditVehicleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.carType = data.carType;
      this.lastSuccessfulConnection = data.lastSuccessfulConnection;
      this.timeCreated = data.timeCreated;
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
      carType: this.carType,
      timeCreated: this.timeCreated,
      lastSuccessfulConnection: this.lastSuccessfulConnection,
    };

    this.dialogRef.close(vehicleData);
  }
}
