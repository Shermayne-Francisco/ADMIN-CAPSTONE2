import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'] 
}) 

export class ClientsComponent {
  centered = false;
  search : String ="";
  disableSelect = new FormControl(false);
}