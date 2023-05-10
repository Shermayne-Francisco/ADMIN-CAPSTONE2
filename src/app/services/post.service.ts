import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  private _url = "http://localhost/PetHealth-API/";

  postData(url:any,data:any){
    return this.http.post(this._url + url , data);
  }
  postDataID(url:any,data:any,id:any){
    return this.http.post(this._url + url + '/'+id, data);
  }
  postNull(url:any,id:any){
    return this.http.post(this._url+url+'/'+id,null);
  }
}
