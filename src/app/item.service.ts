import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems()
  {
    return [
      {name:"Ice-cream"},
      {name:"rice"},
      {name:"Apple"},
      {name:"Mango"},
    ];
  }

}
