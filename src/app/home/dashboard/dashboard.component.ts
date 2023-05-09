import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// FOR EDIT ACTION DIALOG
interface Action {
  name: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  // FOR ALL APPOINTMENTS PAGINATION
  displayedColumns: string[] = ['id', 'name', 'pet', 'service', 'date', 'time', 'status', 'actions'];
  dataSource = new MatTableDataSource<AllAppointments>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // FOR EDIT ACTION, PENDING, AND REQUESTS DIALOG
  constructor(public dialog: MatDialog) {}
    editDialog() {
      const dialogRef = this.dialog.open(EditActionDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    pending() {
      const dialogRef = this.dialog.open(PendingDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    request() {
      const dialogRef = this.dialog.open(RequestDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    clients() {
      const dialogRef = this.dialog.open(ClientsDialog)
        
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
  date: string;
  time: string;
  status: string;
}

const ELEMENT_DATA: AllAppointments[] = [
  {id: 1, name: 'Shermayne Francisco', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
  {id: 2, name: 'Lola Lapid', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'Pending'},
  {id: 3, name: 'Piolo Paras',pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'Delayed'},
  {id: 4, name: 'Paulo Paras', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'Cancelled'},
  {id: 5, name: 'Adrian Montallana', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'Done'},
  {id: 6, name: 'Kristiane Dizon', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
  {id: 7, name: 'Mirasol Dela Cruz', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
  {id: 8, name: 'Edrian Francisco', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
  {id: 9, name: 'Neil Bitangcol', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
  {id: 10, name: 'Nicole Villa', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'In progress'},
];

/** EDIT ACTION DIALOG */
@Component({
  selector: 'edit-action-dialog',
  templateUrl: 'edit-action-dialog.html',
})
export class EditActionDialog {
  typeControl = new FormControl<Action | null>(null, Validators.required);
  actions: Action[] = [
    {name: 'In Progress'},
    {name: 'Pending'},
    {name: 'Delayed'},
    {name: 'Cancelled'},
    {name: 'Done'},
  ];

  myDatePicker: any;
}

/** PENDING PAGINATION */
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
    {id: 1, name: 'Shermayne Francisco', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
    {id: 2, name: 'Lola Lapid', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
    {id: 3, name: 'Piolo Paras',pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
    {id: 4, name: 'Paulo Paras', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
    {id: 5, name: 'Adrian Montallana', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
    {id: 6, name: 'Kristiane Dizon', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
    {id: 7, name: 'Mirasol Dela Cruz', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
    {id: 8, name: 'Edrian Francisc', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Cancelled'},
    {id: 9, name: 'Neil Bitangcol', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
    {id: 10, name: 'Nicole Villa', pet: 'Akio', date: '4/12/2023', time: '12:30', vaccineType: 'Deworming', status: 'Accepted'},
  ];

/** REQUESTS PAGINATION */ 
@Component({
  selector: 'request-dialog',
  templateUrl: 'request-dialog.html',
})
export class RequestDialog implements AfterViewInit {
  // FOR REQUESTS PAGINATION 
  displayedColumns: string[] = [ 'id', 'name', 'pet', 'service', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource([
    {id: 1, name: 'Shermayne Francisco', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 2, name: 'Lola Lapid', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 3, name: 'Piolo Paras',pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 4, name: 'Paulo Paras', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 5, name: 'Adrian Montallana', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 6, name: 'Kristiane Dizon', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 7, name: 'Mirasol Dela Cruz', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 8, name: 'Edrian Francisc', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 9, name: 'Neil Bitangcol', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
    {id: 10, name: 'Nicole Villa', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30 PM', status: 'pending'},
  ]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

/** CLIENTS PAGINATION */ 
@Component({
  selector: 'clients-dialog',
  templateUrl: 'clients-dialog.html',
})
export class ClientsDialog implements AfterViewInit {
  // FOR CLIENTS PAGINATION 
  displayedColumns: string[] = ['id', 'name', 'pet'];
  dataSource = new MatTableDataSource<Clients>(CLIENTS_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// CONTENTS OF CLIENTS PAGINATION
export interface Clients {
  id: number; 
  name: string;
  pet: string;
}

const CLIENTS_DATA: Clients[] = [
  {id: 1, name: 'Shermayne Francisco', pet: 'Akio'},
  {id: 2, name: 'Lola Lapid', pet: 'Akio'},
  {id: 3, name: 'Piolo Paras',pet: 'Akio'},
  {id: 4, name: 'Paulo Paras', pet: 'Akio'},
  {id: 5, name: 'Adrian Montallana', pet: 'Akio'},
  {id: 6, name: 'Kristiane Dizon', pet: 'Akio'},
  {id: 7, name: 'Mirasol Dela Cruz', pet: 'Akio'},
  {id: 8, name: 'Edrian Francisc', pet: 'Akio'},
  {id: 9, name: 'Neil Bitangcol', pet: 'Akio'},
  {id: 10, name: 'Nicole Villa', pet: 'Akio'},
];