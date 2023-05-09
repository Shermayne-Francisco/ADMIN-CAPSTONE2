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
  contact: string;
  email: string;
  address: string;
}

const VAXX_DATA: Vaccination[] = [
  { name: 'Shermayne Francisco', pet: 'Akio', weight: '6.8', 
    contact: '09705759514', email: 'ooi@gmail.com', address: 'Calapacuan, Subic, Zambales'},
  { name: 'Lola Lapid', pet: 'Negs', weight: '6.8', 
    contact: '09123456789', email: 'lola@gmail.com', address: 'Matain, Subic, Zambales'},
  { name: 'Piolo Paras', pet: 'Nazi', weight: '6.8', 
    contact: '09701759395', email: 'pio@gmail.com', address: 'Calapandayan, Subic, Zambales'},
  { name: 'Paulo Paras', pet: 'Snow', weight: '6.8', 
    contact: '09762419911', email: 'pau@gmail.com', address: 'Matain, Subic, Zambales'},
  { name: 'Adrian Montallana', pet: 'Nazi', weight: '4.8', 
    contact: '09509118910', email: 'adrian@gmail.com', address: 'Sawmill, Subic, Zambales'},
  { name: 'Kristiane Dizon', pet: 'Akio', weight: '4.8', 
    contact: '09762418921', email: 'kris@gmail.com', address: 'New Cabalan, Olongapo City'},
  { name: 'Mirasol Dela Cruz', pet: 'Akio', weight: '5.8', 
    contact: '09485759514', email: 'mira@gmail.com', address: 'Olongapo City'},
  { name: 'Edrian Francisco', pet: 'Nazi', weight: '5.8', 
    contact: '09122419911', email: 'eddy@gmail.com', address: 'Calapacuan, Subic, Zambales'},
  { name: 'Neil Bitangcol', pet: 'Akio', weight: '5.8', 
    contact: '09123487644', email: 'neil@gmail.com', address: 'Sta. Rita, Olongapo City'},
  { name: 'Nicole Villa', pet: 'Fofo', weight: '7', 
    contact: '09507639272', email: 'nics@gmail.com', address: 'Morong, Bataan'},
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

  // dataSource1 = [  
  //   { city: 'New York', population: 8623000 },  
  //   { city: 'Los Angeles', population: 3990456 },  
  //   { city: 'Chicago', population: 2705994 }
  // ];

  // dataSource2 = [  
  //   { city: 'New York', population: 8623000 },  
  //   { city: 'Los Angeles', population: 3990456 },  
  //   { city: 'Chicago', population: 2705994 }
  // ];

  // dataSource3 = [  
  //   { city: 'New York', population: 8623000 },  
  //   { city: 'Los Angeles', population: 3990456 },  
  //   { city: 'Chicago', population: 2705994 }
  // ];

  // dataSource4 = [  
  //   { city: 'New York', population: 8623000 },  
  //   { city: 'Los Angeles', population: 3990456 },  
  //   { city: 'Chicago', population: 2705994 }
  // ];

  displayedColumns = ['name', 'pet', 'weight', 'contact', 'address'];
  // displayedColumns1 = ['city', 'population'];
  // displayedColumns2 = ['city', 'population'];
  // displayedColumns3 = ['city', 'population'];
  // displayedColumns4 = ['city', 'population'];

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

