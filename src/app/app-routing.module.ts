import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { ClientProfileComponent } from './home/client-profile/client-profile.component';
import { ProfileComponent } from './home/clients/profile/profile.component';

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
        { path: 'clients', 
          component: ClientsComponent,

          // children: [
          //   { path: 'profile',
          //     component: ProfileComponent,
          //   }
          // ]
        },
        
        { path: 'appointments', 
          component: AppointmentsComponent
        },
        { path: 'client-profile', 
          component: ClientProfileComponent
        },
      ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
