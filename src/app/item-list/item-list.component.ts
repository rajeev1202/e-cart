import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import {RequestedItem} from '../requestedItem.model';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
//import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  requestedItemForm: FormGroup;

  submitted = false;
  public loggedInUser;
  public itemList = [];
  public loggedInUserItem = JSON.parse(localStorage.getItem("itemList"))
  public cartItem = [[], []];
  public requestedItemList = [[], []];
  public PurchaseList = [[], []];

  ngOnInit(): void {
    let dataAvailable = localStorage.getItem("itemList");
    // console.log(dataAvailable);
    console.log("itemlist",this.itemList);
    if (dataAvailable != undefined) {
      console.log("inside if");
      this.itemList = JSON.parse(localStorage.getItem("itemList"));
    }
    else {
      console.log("inside else")
      this.itemList = [
        { name: "Ice-cream", user: [1, 1] },
        { name: "rice", user: [1, 1] },
        { name: "Apple", user: [1, 1] },
        { name: "Mango", user: [1, 1] },
      ];
      localStorage.setItem("itemList", JSON.stringify(this.itemList));
    }
    


    if (JSON.parse(localStorage.getItem("cartItem")))
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));

    this.requestedItemForm = this.fb.group({
      requestedItems: this.fb.array([
      ]),
    });
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));

  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/', 'login-page']);
  }
  addToCart(item) {
    if (JSON.parse(localStorage.getItem("cartItem"))) {
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));
      console.log("storage", this.cartItem);
    }

    let currentData = this.cartItem[this.loggedInUser].find(data => data.name === item.name);
    if (!currentData) {
      let temp = { name: item.name, num: 1 }
      this.cartItem[this.loggedInUser].push(temp);
      console.log("if", this.cartItem);
    }
    else {
      currentData.num += 1;
      console.log("else", currentData)
    }
    console.log("cart", this.cartItem);
    localStorage.setItem("cartItem", JSON.stringify(this.cartItem));

  }

  increaseItemInCart(item, index) {
    if (JSON.parse(localStorage.getItem("cartItem"))) {
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));

    }
    this.cartItem[this.loggedInUser][index].num += 1;
    localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
  }

  reduceItemInCart(item, index) {
    if (JSON.parse(localStorage.getItem("cartItem"))) {
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));

    }
    if (this.cartItem[this.loggedInUser][index].num > 0) {
      this.cartItem[this.loggedInUser][index].num -= 1;
      localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
    }
  }

  deleteItem(index) {
    if (JSON.parse(localStorage.getItem("cartItem"))) {
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));
    }
    this.cartItem[this.loggedInUser].splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
  }

  addPurchaseItem(item) {
    if (JSON.parse(localStorage.getItem("PurchaseList"))) {
      this.PurchaseList = JSON.parse(localStorage.getItem("PurchaseList"));
    }
    let currentData = this.PurchaseList[this.loggedInUser].find(data => data.name === item.name);
    if (!currentData) {
      console.log("inside if")
      let temp = { name: item.name, num: 1 }
      this.PurchaseList[this.loggedInUser].push(temp);
    }
    else {
      console.log("inside else")
      currentData.num += 1;
    }
    localStorage.setItem("PurchaseList", JSON.stringify(this.PurchaseList));

  }

  get requestedItems() {
    return this.requestedItemForm.get('requestedItems') as FormArray;
  }

  addRequestItemInput() {
    this.submitted = false;
    this.requestedItems.push(this.fb.control(''));
  }
  removeRequestedItemInput(i) {
    this.requestedItems.controls.splice(i, 1);
  }

  addRequestedItem(itemsRequested) {
    if (JSON.parse(localStorage.getItem("requestedItemList"))) {
      this.requestedItemList = JSON.parse(localStorage.getItem("requestedItemList"));
    }
    let itemPresent = this.itemList.map(data => data.name);
    console.log("itempresent", itemPresent);
    let uniqueArray = itemsRequested.filter(data => (!this.requestedItemList[this.loggedInUser].includes(data)) && (!itemPresent.includes(data)));

    console.log("unique", uniqueArray);
    this.requestedItemList[this.loggedInUser] = this.requestedItemList[this.loggedInUser].concat(uniqueArray);
    localStorage.setItem("requestedItemList", JSON.stringify(this.requestedItemList));
  }
  onSubmitRequestedForm() {
    this.submitted = true;
    let result = JSON.parse(JSON.stringify(this.requestedItems.controls.map(item => item.value)));
    this.requestedItems.controls = [];
    console.log("requested items", result);
    this.addRequestedItem(result);

    console.log("this.requested", this.requestedItemList);
  }


}
