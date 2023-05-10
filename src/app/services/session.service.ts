import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor() { }
  
  uploadToSession(data: any) {
    sessionStorage.setItem('Data', data);
  }

  getSessionData() {
    return sessionStorage.getItem('Data');
  }

  deleteData() {
    sessionStorage.removeItem("Data");
  }

  searchSessionId() {
    return sessionStorage.getItem('Data');
  }
}
