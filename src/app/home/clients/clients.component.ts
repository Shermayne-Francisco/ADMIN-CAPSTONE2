import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'] 
}) 

export class ClientsComponent {
  centered = false;
  search : String ="";
  disableSelect = new FormControl(false);

  constructor(public dialog: MatDialog) {}
    openDialog() {
      const dialogRef = this.dialog.open(ClientsDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
  
@Component({
  selector: 'clients-dialog',
  templateUrl: 'clients-dialog.html',
})
export class ClientsDialog {}
