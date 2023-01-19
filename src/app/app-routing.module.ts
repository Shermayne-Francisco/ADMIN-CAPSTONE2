import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';

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
          component: ClientsComponent
        },
      ]
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
