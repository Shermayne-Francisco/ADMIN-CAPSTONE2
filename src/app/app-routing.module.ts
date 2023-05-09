import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ClientsComponent } from './home/clients/clients.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { path: 'login', 
    component: LoginComponent
  },
  { path: 'home', 
    component: HomeComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        { path: 'clients',
          component: ClientsComponent,
        },
        { path: 'appointments', 
          component: AppointmentsComponent,
        }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
