import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-item',
  template: `
  <div> 
  <button class='btn btn-secondary'>LogOut</button> 
  </div>
  `,
  styles: [
  ]
})
export class RequestedItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
