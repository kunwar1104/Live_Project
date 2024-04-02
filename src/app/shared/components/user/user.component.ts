import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  
  userData$!: Observable<any> | any;

  constructor ( public us : UserService) { }

  ngOnInit() {
    const data = "";
    this.userData$ = this.get_Data(data);
    
  }

  // getUserData(): Observable<any> {
  //   return new Observable((observer) => {

  //     const user_data = {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       age: 50,
  //       eyeColor: 'blue',
  //     };

  //     observer.next(user_data); 
  //   });
  // }

  get_Data(data:any){
      this.us.get_User_Data(data)
  }
}
