import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../Api-Handler/api-handler.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
  
})
export class UserService {
    
  userData$! : Observable<any> 
  query:any ;
    url : string = "https://api.skillspire.in/api/program/?sortBy=start_dat11e&limit=6&page=1";
  constructor( public  api_Handler :  ApiHandlerService) { }

  ngOnInit(): void {
    // this.get_User_Data();
  }

  

  get_User_Data() {
    return this.api_Handler.doGet(`${this.url}`)
    

    
  }
}
