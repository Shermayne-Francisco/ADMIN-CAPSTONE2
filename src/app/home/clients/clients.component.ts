import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';



// FOR ADD SCHED AND HEALTH HISTORY DIALOG
interface Vaccine {
  vaxx: string;
}

//FOR CLIENT TABLE LIST
export interface UserData {
  name: string;
}

// CONSTANTS USED TO FILL UP THE DATABASE
const NAMES: UserData[] = [
  {name: 'Maia'}, {name: 'Shen'}, {name: 'Koala'},
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'] 
}) 
export class ClientsComponent implements AfterViewInit, OnInit {
  sessionStorage: any =  this.sessionService.getSessionData();
  ID:any = JSON.parse(this.sessionStorage).user_id;
  panelOpenState = false;
  disableSelect = new FormControl(false);
  

  //CLIENTS' LISTS PAGINATION
  displayedColumns: string[] = ['name'];
  dataSource0 = new MatTableDataSource<UserData>(NAMES);
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;
  user_id: any;

  constructor(
    public dialog: MatDialog,
    private post: PostService,
    private sessionService: SessionService
    ) {
    /** TABLE LIST PAGINATION */
    // CREATE 100 USERS
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  }

  ngOnInit(){
    this.getALLClientsInfo();

   
  }

  ngAfterViewInit() {
    this.dataSource0.paginator = this.paginator;
    this.dataSource0.sort = this.sort;
  }

  getALLClientsInfo() {
    this.post.postData('getALLClientsInfo', JSON.stringify(NAMES))
    .subscribe((response: any) => {
      const clientsinfo = response.payload; 
      this.dataSource0.data =  clientsinfo; 
      this.dataSource0.paginator = this.paginator;
    });
  }

  fetchingUser(row: any): void {
    let data = {
      user_id: row.user_id,
      user_fname: row.user_fname,
      user_lname: row.user_lname
    };
  
    this.post.postData('getSpecificClientInfo', data).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error('HTTP Error:', error);
      }
    );
  }
  
  

 
  //FILTER FIELD
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource0.filter = filterValue.trim().toLowerCase();

    if (this.dataSource0.paginator) {
      this.dataSource0.paginator.firstPage();
    }
  }

  /** DIALOGS */
  addSched() { 
    const dialogRef = this.dialog.open(AddschedDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addHealth() {
    const dialogRef = this.dialog.open(AddhealthDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  vaxxDialog() {
    const dialogRef = this.dialog.open(VaccinationDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dewormDialog() {
    const dialogRef = this.dialog.open(DewormingDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  hwpDialog() {
    const dialogRef = this.dialog.open(HeartwormDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  otherDialog() {
    const dialogRef = this.dialog.open(TreatmentsDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  /** END -- DIALOGS */
  
}

/** TABLE LIST PAGINATION */
// BUILDS AND RETURNS A NEW USER
// function createNewUser(_id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     name: name,
//   };
// }


/** ADD SCHED DIALOG */
@Component({
  selector: 'addsched-dialog',
  templateUrl: 'addsched-dialog.html',
})
export class AddschedDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {vaxx: 'Vaccination'},
    {vaxx: 'Deworming'},
    {vaxx: 'Heartworm Prevention'},
    {vaxx: 'Other Treatment'},
  ];

  myDatePicker: any;
}
/** END -- ADD SCHED DIALOG */

/** PET HEALTH HISTORY DIALOG */
@Component({
  selector: 'addhealth-dialog',
  templateUrl: 'addhealth-dialog.html',
})
export class AddhealthDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {vaxx: 'Vaccination'},
    {vaxx: 'Deworming'},
    {vaxx: 'Heartworm Prevention'},
    {vaxx: 'Other Treatment'},
  ];
}
/** END -- PET HEALTH HISTORY DIALOG */


            /** HEALTH HISTORY DIALOGS — VAXX, DEWORM, HWP */
/** FOR VACCINATION DIALOG */
@Component({
  selector: 'vaccination-dialog',
  templateUrl: 'vaccination-dialog.html',
})
export class VaccinationDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR VACCINATION DIALOG */

/** FOR DEWORMING DIALOG */
@Component({
  selector: 'deworming-dialog',
  templateUrl: 'deworming-dialog.html',
})
export class DewormingDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR DEWORMING DIALOG */

/** FOR HEARTWORM DIALOG */
@Component({
  selector: 'heartworm-dialog',
  templateUrl: 'heartworm-dialog.html',
})
export class HeartwormDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR HEARTWORM DIALOG */

/** FOR TREATMENTS DIALOG */
@Component({
  selector: 'treatments-dialog',
  templateUrl: 'treatments-dialog.html',
})
export class TreatmentsDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// Contents - History Pagination
export interface History {
  name: string;
  weight: string;
  date: string;
}

const HISTORIES_DATA: History[] = [
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
];
/** END -- FOR TREATMENTS DIALOG */