import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../Api-Handler/api-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
  
})
export class UserService {
    
  userData$! : Observable<any> 

  constructor( public  api_Handler :  ApiHandlerService) { }

  user_Data(data: any) {
     return this.api_Handler.doGet(data)
  }

  get_User_Data(data:any): Observable<any> {
    return this.api_Handler.doGet(data)
  }
}
