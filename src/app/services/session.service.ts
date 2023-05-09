import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  loadToSession(data: any) {
    sessionStorage.setItem('data', data);
  }

  getSessionData() {
    return sessionStorage.getItem('data');
  }

  deleteData() {
    sessionStorage.removeItem("data");
  }
}
