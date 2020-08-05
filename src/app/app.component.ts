import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  itemList=[]
  cartItem=[];
  requestedItem=[];
  purchaseItem=[];


  constructor(){}
  title = 'e-cart';
  
 
}
