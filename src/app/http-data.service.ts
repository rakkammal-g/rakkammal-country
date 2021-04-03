import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  url:any
  constructor(private http:HttpClient) { }

  getData(){
    let mainUrl = environment.countryApiUrl 
    return this.http.get(mainUrl)
  }

  postData(url:any, data:any){
    return this.http.post(url,data)
  }
}
