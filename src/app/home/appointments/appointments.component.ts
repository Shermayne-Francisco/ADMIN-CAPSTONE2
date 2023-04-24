import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements AfterViewInit {
  // FOR ALL APPOINTMENTS PAGINATION
  displayedColumns: string[] = ['id', 'name', 'pet', 'service', 'petType', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource<AllAppointments>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // FOR PENDING AND REQUESTS DIALOG
  constructor(public dialog: MatDialog){}
    pending() {
      const dialogRef = this.dialog.open(PendingDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    requests() {
      const dialogRef = this.dialog.open(RequestsDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}

// CONTENTS OF ALL APPOINTMENTS PAGINATION
export interface AllAppointments {
  id: number;
  name: string;
  pet: string;
  service: string;
  petType: string;
  date: string;
  time: string;
  status: string;
}

const ELEMENT_DATA: AllAppointments[] = [
  {id: 1, name: 'Shermayne', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 2, name: 'Lola', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 3, name: 'Piolo',pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 4, name: 'Paulo', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 5, name: 'Adrian', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 6, name: 'Kristiane', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 7, name: 'Mirasol', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 8, name: 'Edrian', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 9, name: 'Neil', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 10, name: 'Nicole', pet: 'Akio', service: 'Grooming', petType: 'Dog', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
];

// PENDING PAGINATION
@Component({
  selector: 'pending-dialog',
  templateUrl: 'pending-dialog.html',
})
export class PendingDialog implements AfterViewInit {
  // FOR PENDING PAGINATION
  displayedColumns: string[] = ['id', 'name', 'pet', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource<Pending>(PENDING_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// CONTENTS OF PENDING PAGINATION
export interface Pending {
  id: number;
  name: string;
  pet: string;
  vaccineType: string;
  date: string;
  time: string;
  status: string;
}

const PENDING_DATA: Pending[] = [
  {id: 1, name: 'Mika', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  {id: 2, name: 'Akim', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
  {id: 3, name: 'Zara',pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  {id: 4, name: 'Carl', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
  {id: 5, name: 'San', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  {id: 6, name: 'Alicia', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
  {id: 7, name: 'Ash', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  {id: 8, name: 'Puti', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
  {id: 9, name: 'Bogart', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
  {id: 10, name: 'Shawala', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
];

// REQUESTS PAGINATION
@Component({
  selector: 'requests-dialog',
  templateUrl: 'requests-dialog.html',
})
export class RequestsDialog implements AfterViewInit {
  // FOR REQUESTS PAGINATION
  displayedColumns: string[] = ['id', 'name', 'pet', 'service', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource<Requests>(REQUESTS_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// CONTENTS OF REQUESTS PAGINATION
export interface Requests {
  id: number;
  name: string;
  pet: string;
  service: string;
  date: string;
  time: string;
  status: string;
}

const REQUESTS_DATA: Requests[] = [
  {id: 1, name: 'Shermayne', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 2, name: 'Lola', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 3, name: 'Piolo',pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 4, name: 'Paulo', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 5, name: 'Adrian', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 6, name: 'Kristiane', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 7, name: 'Mirasol', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 8, name: 'Edrian', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 9, name: 'Neil', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 10, name: 'Nicole', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
];