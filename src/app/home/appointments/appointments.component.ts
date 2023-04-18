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

@Component({
  selector: 'pending-dialog',
  templateUrl: 'pending-dialog.html',
})
export class PendingDialog {
}

@Component({
  selector: 'requests-dialog',
  templateUrl: 'requests-dialog.html',
})
export class RequestsDialog {
}