import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent, ClientsDialog } from './home/clients/clients.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientsComponent,
    ClientsDialog,
    AppointmentsComponent,
    ClientProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }