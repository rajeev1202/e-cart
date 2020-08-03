import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import {ItemService } from '../item.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
userName: string;
password:string;
public loggedInUser:Number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(name,passcode){
    if(name == "user1" && passcode == "1234")
    {
      this.loggedInUser=0;
      sessionStorage.setItem("user",JSON.stringify(this.loggedInUser))
      this.router.navigate(['/','item-list'])
     }

     if(name == "user2" && passcode == "1234")
    {
      this.loggedInUser=1;
      sessionStorage.setItem("user",JSON.stringify(this.loggedInUser))
      this.router.navigate(['/','item-list'])
     }
     if(name == "owner" && passcode == "1234")
    {
      this.loggedInUser=2;
      sessionStorage.setItem("user",JSON.stringify(this.loggedInUser))
      this.router.navigate(['/','owner-page'])
     }

   //this._itemService.setCurrentLoggedInUser(this.loggedInUser);
    }
   

}
