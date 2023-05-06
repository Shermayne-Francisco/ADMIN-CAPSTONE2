import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  name: string;
}

// CONSTANTS USED TO FILL UP THE DATABASE
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'] 
}) 

export class ClientsComponent {
  centered = false;
  search : String ="";
  disableSelect = new FormControl(false);

  //CLIENTS' LISTS PAGINATION
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // CREATE 100 USERS
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // ASSIGN THE DATA TO THE DATA SOURCE FOR THE TABLE TO RENDER
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //FILTER FIELD
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// BUILDS AND RETURNS A NEW USER
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    // id: id.toString(),
    name: name,
    // progress: Math.round(Math.random() * 100).toString(),
    // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}


//CLIENTS DIALOG
@Component({
  selector: 'clients-dialog',
  templateUrl: 'clients-dialog.html',
})
export class ClientsDialog {}
