import { AfterViewInit, Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/services/post.service';
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

const VAXX_DATA: Vaccination[] = [];

export interface Deworming {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const DEWORM_DATA: Deworming[] = [];

export interface Heartworm {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const HWP_DATA: Heartworm[] = [];

export interface Grooming {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const GROOM_DATA: Grooming[] = [];

export interface Others {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const OTHER_DATA: Others[] = [];


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements AfterViewInit, OnInit  {
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
  
  //VACCINATION
  dataSource = new MatTableDataSource<Vaccination>(VAXX_DATA);
  displayedColumns = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  //DEWORMING
  dataSource1 = new MatTableDataSource<Deworming>(DEWORM_DATA);
  displayedColumns1 = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  //HEARTWORM
  dataSource2 = new MatTableDataSource<Heartworm>(HWP_DATA);
  displayedColumns2 = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  //GROOMING
  dataSource3 = new MatTableDataSource<Grooming>(GROOM_DATA);
  displayedColumns3 = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  //OTHER TREATMENTS
  dataSource4 = new MatTableDataSource<Others>(OTHER_DATA);
  displayedColumns4 = ['name', 'pet', 'weight', 'dateAdmitted', 'dateCompleted'];

  // tableNumber = 1;

  // onTabSelected(event: { index: number; }) {
  //   this.tableNumber = event.index + 1;
  // }
  constructor(
    // private _liveAnnouncer: LiveAnnouncer,
    private post: PostService
  ){}
  ngOnInit() {
    this.getAllVaccinationReports();
    this.getAllDewormingReports();
    this.getAllGroomingReports();
    this.getAllHeartWormReports();
    this.getAllOtherReports();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllVaccinationReports(){
    this.post.postData('getAllVaccinationReports', JSON.stringify(VAXX_DATA))
      .subscribe((response: any) => {
        const appointments = response.payload; 
        this.dataSource.data = appointments; 
        this.dataSource.paginator = this.paginator;
      });
  }

  getAllDewormingReports(){
    this.post.postData('getAllDewormingReports', JSON.stringify(DEWORM_DATA))
    .subscribe((response: any) => {
      const dewormingreports = response.payload; 
      this.dataSource1.data = dewormingreports; 
      this.dataSource1.paginator = this.paginator;
    });
  }

  getAllHeartWormReports(){
    this.post.postData('getAllHeartWormReports', JSON.stringify(HWP_DATA))
    .subscribe((response: any) => {
      const heartwormingreports = response.payload; 
      this.dataSource2.data = heartwormingreports; 
      this.dataSource2.paginator = this.paginator;
    });
  }

  getAllGroomingReports(){
    this.post.postData('getAllGroomingReports', JSON.stringify(GROOM_DATA))
    .subscribe((response: any) => {
      const groomingreports = response.payload; 
      this.dataSource3.data = groomingreports; 
      this.dataSource3.paginator = this.paginator;
    });
  }

  getAllOtherReports(){
    this.post.postData('getAllOtherReports', JSON.stringify(OTHER_DATA))
    .subscribe((response: any) => {
      const otherreports = response.payload; 
      this.dataSource4.data = otherreports; 
      this.dataSource4.paginator = this.paginator;
    });
  }
 
}

