import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  select()
  {
    return this.http.get("http://192.168.0.103:8888/prod");
  }
}
