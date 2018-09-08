import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ServerApiService } from '../app/server-api.service';
import { HttpModule } from '@angular/http';

import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';





@NgModule({
  entryComponents: [ EditVehicleComponent ],
  declarations: [
    AppComponent,
    VehicleComponent,
    EditVehicleComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpModule
  ],
  providers: [ServerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
