import { NgModule } from '@angular/core';
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

import { DashboardComponent, EditActionDialog } from './home/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent, AddclientDialog, HistoryDialog } from './home/clients/clients.component';
import { AppointmentsComponent, PendingDialog, RequestsDialog} from './home/appointments/appointments.component';
// import { PetProfileComponent} from './pet-profile/pet-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    ClientsComponent,
    AddclientDialog,
    HistoryDialog,

    AppointmentsComponent,
    PendingDialog,
    RequestsDialog,
    
    // PetProfileComponent,

    DashboardComponent,
    EditActionDialog
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }