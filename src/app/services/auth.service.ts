import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private url = "http://localhost/PetHealth-API/";
    // https://gcsamp.mleystock-pile.com/
  // http://localhost/gcsamp-back/

  
  login(data: any) {
    return this.http.post(this.url + 'Login',data);
  }

}
