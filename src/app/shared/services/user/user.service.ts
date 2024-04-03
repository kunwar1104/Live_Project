import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../Api-Handler/api-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
  
})
export class UserService {
    
  userData$! : Observable<any> 
  query:any ;
  constructor( public  api_Handler :  ApiHandlerService) { }

  ngOnInit(): void {
    this.get_User_Data();
  }

  

  get_User_Data(): Observable<any> {
    return this.api_Handler.doGet()
  }
}
