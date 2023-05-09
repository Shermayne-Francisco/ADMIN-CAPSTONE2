import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private sessionService: SessionService,
  ){}

    logout(){
      this.sessionService.deleteData();
      this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
    }
}
