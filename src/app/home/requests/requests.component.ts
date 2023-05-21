import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {
  filteredData: any[] = [];

    constructor(
      private session: SessionService,
      private post: PostService 
    ){}
  
    ngOnInit() {
      this.getRequestAppointment();
    }
    
    getRequestAppointment() {
      let data = {
        user_id: null,
        status: 'Pending'
      };
  
      this.post.postData('getRequestAppointment', JSON.stringify(data)).subscribe(
        (response: any) => {
          console.log(response);
          this.filteredData = response.payload;
          console.log(response.payload) // Assign response data to filteredData
        },
        (error: any) => {
          console.log('Error fetching request appointment:', error);
        }
      );
    }
}
