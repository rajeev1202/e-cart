import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { 
    
  }
  public loggedInUser;
ngOnInit(){
  
}
setCurrentLoggedInUser(user:Number){
this.loggedInUser = user;
}
getCurrentLoggedInUser()
{
  return this.loggedInUser
}
    
  
}
