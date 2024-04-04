import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {

  
  public sort_By : string | any = "start_date"

  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    //  this.doGet()
    //  console.log(this.demo_url);
  }

  doGet(url:string ) {
    return this.http.get(url).pipe(
      map((res:any) => {
         console.log(res);
         return res.DATA.programs;
         
      }),
      catchError(this.handelError),
      
    ) 
    }
  

  doPost( url : string ) {
   
  }
  put( ) {

  }

  public handelError(error: HttpErrorResponse) {
    
    let errorMessage : any = '';
    if(error.error instanceof ErrorEvent) {
      // Client side error
      console.log("client side");
       errorMessage = error
    } 
    else {
      // Server side error 
      console.log("serve side");
      errorMessage = error ;
    }
    console.log(errorMessage);
    return errorMessage
  }
}  
