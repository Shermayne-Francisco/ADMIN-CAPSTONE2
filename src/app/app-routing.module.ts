import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ClientsComponent } from './home/clients/clients.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { RequestsComponent } from './home/requests/requests.component';
import { PendingComponent } from './home/pending/pending.component';

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
        },
        { path: 'requests', 
          component: RequestsComponent,
        },
        { path: 'pending', 
          component: PendingComponent,
        }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
