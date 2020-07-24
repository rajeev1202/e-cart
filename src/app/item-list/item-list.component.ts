import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private router:Router, private _itemservice:ItemService) { }

public itemList = [];
public cartItem=[];

  ngOnInit(): void {
    this.itemList = this._itemservice.getItems();
  }
  logOut()
{
  this.router.navigate(['/','login-page']);
}
addToCart(item)
{
const itemInCart = this.cartItem.find( data => data.name === item.name);
if(!itemInCart)
{
  this.cartItem = this.cartItem.concat({...item,num:1})
}
else{
  itemInCart.num += 1;
}
}

addItem(item){
  
  item.num +=1;
}

reduceItem(item){
  if(item.num>0)
  item.num -= 1;
}

deleteItem(index)
{

   this.cartItem.splice(index,1);
}


}
