import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsDialog } from '../clients/clients.component';


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

  // FOR EDIT ACTION DIALOG
  constructor(public dialog: MatDialog) {}
    editDialog() {
      const dialogRef = this.dialog.open(EditActionDialog)
        
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
  {id: 1, name: 'Shermayne Francisco', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 2, name: 'Lola Lapid', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Pending'},
  {id: 3, name: 'Piolo Paras',pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Delayed'},
  {id: 4, name: 'Paulo Paras', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Cancelled'},
  {id: 5, name: 'Adrian Montallana', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Done'},
  {id: 6, name: 'Kristiane Dizon', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 7, name: 'Mirasol Dela Cruz', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 8, name: 'Edrian Francisco', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 9, name: 'Neil Bitangcol', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
  {id: 10, name: 'Nicole Villa', pet: 'Akio', service: 'Grooming', date: '4/12/2023', time: '12:30', status: 'Ongoing'},
];

//EDIT ACTION DIALOG
@Component({
  selector: 'edit-action-dialog',
  templateUrl: 'edit-action-dialog.html',
})
export class EditActionDialog {
  typeControl = new FormControl<Action | null>(null, Validators.required);
  actions: Action[] = [
    {name: 'Ongoing'},
    {name: 'Pending'},
    {name: 'Delayed'},
    {name: 'Cancelled'},
    {name: 'Done'},
  ];
}
