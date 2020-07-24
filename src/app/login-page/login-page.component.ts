import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
userName: string;
password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(name,passcode){
    if(name == "admin" && passcode == "1234")
    {
      this.router.navigate(['/','item-list'])
     }
    
    }

}
