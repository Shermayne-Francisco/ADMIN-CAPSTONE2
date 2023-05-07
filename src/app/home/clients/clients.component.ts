import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


// FOR HEALTH INFO DIALOG
interface Vaccine {
  name: string;
}

//FOR CLIENT TABLE LIST
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
  panelOpenState = false;
  disableSelect = new FormControl(false);

  //CLIENTS' LISTS PAGINATION
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;

  //HEALTH INFO 
  columnsDisplayed = ['name', 'weight', 'date'];
  sourceData = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {
    /** TABLE LIST PAGINATION */
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

  /** DIALOGS */
  //ADD NEW CLIENT DIALOG
  addClient() {
    const dialogRef = this.dialog.open(AddclientDialog)
      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   //HEALTH INFO DIALOG
   seeHistory() {
    const dialogRef = this.dialog.open(HistoryDialog)
      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

// BUILDS AND RETURNS A NEW USER
function createNewUser(_id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    name: name,
  };
}


//CONTENTS OF HEALTH HISTORY
export interface TypeElement {
  name: string;
  weight: number;
  date: string;
}

const ELEMENT_DATA: TypeElement[] = [
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
];

//ADD NEW CLIENT DIALOG
@Component({
  selector: 'addclient-dialog',
  templateUrl: 'addclient-dialog.html',
})
export class AddclientDialog {
}

//HEALTH INFO DIALOG
@Component({
  selector: 'history-dialog',
  templateUrl: 'history-dialog.html',
})
export class HistoryDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {name: 'Vaccination'},
    {name: 'Deworming'},
    {name: 'Heartworm Prevention'},
  ];

  columnsDisplayed: Iterable<string> | undefined;
  sourceData: Iterable<string> | undefined;
}