import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

// CONTENTS OF ALL APPOINTMENTS PAGINATION
export interface Vaccination {
  name: string;
  pet: string;
  weight: string;
  dateAdmitted: string;
  dateCompleted: string;
}

const VAXX_DATA: Vaccination[] = [
  { name: 'Shermayne Francisco', pet: 'Akio', weight: '6.8', 
    dateAdmitted: '04-12-2023', dateCompleted: '04-12-2023'},

];

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  dataSource = new MatTableDataSource<Vaccination>(VAXX_DATA);
  displayedColumns = ['name', 'pet', 'weight', 'contact', 'address'];

  // tableNumber = 1;

  // onTabSelected(event: { index: number; }) {
  //   this.tableNumber = event.index + 1;
  // }
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
  ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
}

