import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {

  public url : string  = "https://api.skillspire.in/api/program";

  constructor( private http : HttpClient) { }

  doGet( url :string ) {
    return this.http.get(url)
  }

  doPost( url : string ) {
   
  }
  put( ) {

  }
}  
