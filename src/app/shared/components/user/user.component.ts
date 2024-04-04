import { Component } from '@angular/core';
import { map, Observable, pipe, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiHandlerService } from '../../services/Api-Handler/api-handler.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  
  userData$!: Observable<any> ;
  demo_UserData$!: Observable<any>  ;
  data : any ;
  error :any ;
  // erro_Message : any
   

  constructor ( public us : UserService ,
                public http : HttpClient,
                public api_H : ApiHandlerService,
                         ) { }

  ngOnInit() {
    
   
    this.demo_UserData$ = this.us.get_User_Data()

    
     this.us.get_User_Data().subscribe((res:any) => {
      console.log(res);
     })
  }
  
}
