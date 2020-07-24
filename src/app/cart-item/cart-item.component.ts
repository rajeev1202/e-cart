import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  template: `
  <div> 
  <button class='btn btn-secondary'>LogOut</button> 
  </div>
  `,
  styles: [
  ]
})
export class CartItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
