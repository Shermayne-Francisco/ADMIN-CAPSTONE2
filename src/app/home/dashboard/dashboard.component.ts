import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SessionService } from 'src/app/services/session.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'pet', 'service', 'date', 'time', 'status', 'actions'];
  dataSource2 = new MatTableDataSource<AllAppointments>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  completedCount: number = 0;
  countClients: number = 0;
  schedPending: number = 0;
  requestsCount: number = 0;

 
  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
  }

  // FOR EDIT ACTION, PENDING, AND REQUESTS DIALOG
  constructor(public post: PostService,public dialog: MatDialog,private session: SessionService) {}
  ngOnInit() {
   this.getAllAppointments();
   this.getAllCompleted();
   this.getAllClients();
   this.getAllPending();
   this.getAllRequest();
  }

  getAllAppointments() {
    this.post.postData('getAllAppointments', JSON.stringify(ELEMENT_DATA))
      .subscribe((response: any) => {
        const appointments = response.payload; 
        this.dataSource2.data = appointments; 
        this.dataSource2.paginator = this.paginator;
      });
  }

  getAllCompleted() {
  this.post.postData('getAllCompleted', JSON.stringify({}))
    .subscribe((response: any) => {
      this.completedCount = response.payload[0]['count(*)'] || 0;
    });
  }

  getAllClients(){
    this.post.postData('getAllClients', JSON.stringify({}))
    .subscribe((response: any) => {
      this.countClients = response.payload[0]['count(*)'] || 0;
    });
  }

  getAllPending(){
    this.post.postData('getAllPending', JSON.stringify({}))
    .subscribe((response: any) => {
      this.schedPending = response.payload[0]['count(*)'] || 0;
    });
  }

  getAllRequest(){
    this.post.postData('getAllRequest', JSON.stringify({}))
    .subscribe((response: any) => {
      console.log(response)
      this.requestsCount = response.payload[0]['count(*)'] || 0;
     
    });
  }


}

// CONTENTS OF ALL APPOINTMENTS PAGINATION
export interface AllAppointments {
  name: string;
  pet: string;
  service: string;
  date: string;
  time: string;
  status: string;
}

const ELEMENT_DATA: AllAppointments[] = [];


/** PENDING PAGINATION */
@Component({
  selector: 'pending-dialog',
  templateUrl: 'pending-dialog.html',
})
export class PendingDialog implements AfterViewInit {
  displayedColumns: string[] = ['name', 'pet', 'vaccineType', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource<Pending>(PENDING_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// CONTENTS OF PENDING PAGINATION
export interface Pending {
  name: string;
  pet: string;
  vaccineType: string;
  date: string;
  time: string;
  status: string;
}

const PENDING_DATA: Pending[] = [
  {name: 'Shermayne Francisco', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  
];


/** REQUESTS PAGINATION */ 
// @Component({
//   selector: 'request-dialog',
//   templateUrl: 'request-dialog.html',
// })
// export class RequestDialog implements OnInit{
//   filteredData: any[] = [];

//   constructor(
//     public dialog: MatDialog,
//     private session: SessionService,
//     private post: PostService 
//   ){}

//   ngOnInit() {
//     this.getRequestAppointment();
//   }
  
  // getRequestAppointment() {
  //   let data = {
  //     user_id: null,
  //     status: 'Pending'
  //   };

  //   this.post.postData('getRequestAppointment', JSON.stringify(data)).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.filteredData = response.payload;
  //       console.log(response.payload) // Assign response data to filteredData
  //     },
  //     (error: any) => {
  //       console.log('Error fetching request appointment:', error);
  //     }
  //   );
  // }
// }


/** CLIENTS PAGINATION */ 
@Component({
  selector: 'clients-dialog',
  templateUrl: 'clients-dialog.html',
})
export class ClientsDialog implements AfterViewInit, OnInit {
  filteredData: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'pet'];
  dataSource3 = new MatTableDataSource<Clients>(CLIENTS_DATA);

  constructor(
    private post: PostService
  ){}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  countRequest: any;
  requestData:any;
  
  ngOnInit() {
    this.getAllClients();
  }
  ngAfterViewInit() {
    this.dataSource3.paginator = this.paginator;
  }
  getAllClients(){
    let data = {
      user_id: null,
      status: 'Pending'
    };

    this.post.postData('getAllClients', JSON.stringify(data)).subscribe(
      (response: any) => {
        console.log(response);
        this.filteredData = response.payload[0]; // Assign response data to filteredData
      },
      (error: any) => {
        console.log('Error fetching request appointment:', error);
      }
    );
  }
}


// CONTENTS OF CLIENTS PAGINATION
export interface Clients {
  id: number; 
  name: string;
  pet: string;
}

const CLIENTS_DATA: Clients[] = [
  // {id: 3, name: 'Piolo Paras', pet: 'Akio'},
];