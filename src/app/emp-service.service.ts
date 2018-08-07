import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http:HttpClient) { }
  getEmp():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(map(data=>data));
  }
}
