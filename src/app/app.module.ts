import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, 
  NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
  
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent, AddclientDialog, AddpetDialog, AddschedDialog, AddhealthDialog,
  VaccinationDialog, DewormingDialog, HeartwormDialog, TreatmentsDialog } from './home/clients/clients.component';
import { DashboardComponent, EditActionDialog, PendingDialog, 
  RequestDialog, ClientsDialog } from './home/dashboard/dashboard.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    ClientsComponent,
    AddclientDialog,
    AddpetDialog,
    AddschedDialog,
    AddhealthDialog,

    VaccinationDialog,
    DewormingDialog,
    HeartwormDialog,
    TreatmentsDialog,

    DashboardComponent,
    EditActionDialog,
    PendingDialog,
    RequestDialog,
    ClientsDialog,

    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }