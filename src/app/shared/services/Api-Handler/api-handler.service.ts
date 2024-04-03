import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {

  public url : string  = "https://api.skillspire.in/api/program";
  public sort_By : string = "start_date"

  constructor( private http : HttpClient) { }

  doGet(  ) {
    
   let paramsQuery = new HttpParams();
     paramsQuery = paramsQuery.append('sortBy',this.sort_By);
     paramsQuery = paramsQuery.append('limit',6);
     paramsQuery = paramsQuery.append('page',1) 
     
     console.log(paramsQuery)
    return this.http.get(`${this.url}`,{params:paramsQuery})

     // console.log(res)
    }
  

  doPost( url : string ) {
   
  }
  put( ) {

  }
}  
