import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  sessionData: any =  this.sessionService.getSessionData();
  name:any = JSON.parse(this.sessionData).admin_name;
  email:any = JSON.parse(this.sessionData).email;

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ){
    console.log(name);
  }

    logout(){
      this.sessionService.deleteData();
      this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
    }
}
