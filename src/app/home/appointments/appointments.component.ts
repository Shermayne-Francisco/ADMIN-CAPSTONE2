import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { LiveAnnouncer } from '@angular/cdk/a11y';
// import { jsPDF } from "jspdf";



// CONTENTS OF ALL APPOINTMENTS PAGINATION
export interface Vaccination {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const VAXX_DATA: Vaccination[] = [
  { name: 'Shermayne Francisco', pet: 'Akio', weight: '6.8kg', 
    dateAdmitted: '04-12-2023', dateCompleted: '04-12-2023'},
  { name: 'Edrian Francisco', pet: 'Nazi', weight: '6.5kg', 
  dateAdmitted: '04-12-2023', dateCompleted: '04-12-2023'},
];



@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  // @ViewChild('history', {static: false}) el!: ElementRef;

  //FOR PRINTING REPORTS
  // makePDF(){
  //   let pdf = new jsPDF('l', 'pt', [612, 792]);
  //   pdf.html(this.el.nativeElement, {
  //     callback: (pdf) => {
  //        pdf.save("history.pdf");
  //     }
  //   })
  // }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  dataSource = new MatTableDataSource<Vaccination>(VAXX_DATA);
  displayedColumns = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  // tableNumber = 1;

  // onTabSelected(event: { index: number; }) {
  //   this.tableNumber = event.index + 1;
  // }
  constructor(
    // private _liveAnnouncer: LiveAnnouncer,
  ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 
}

