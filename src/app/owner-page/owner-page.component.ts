import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.css']
})
export class OwnerPageComponent implements OnInit {

  public requestedItemList;
  public purchaseItemList;


  constructor(private router:Router) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("requestedItemList")))
this.requestedItemList = JSON.parse(localStorage.getItem("requestedItemList"));
       
if(JSON.parse(localStorage.getItem("PurchaseList")))
this.purchaseItemList = JSON.parse(localStorage.getItem("PurchaseList"));

  }

  makeItemAvailable(item,i,d){
    if(JSON.parse(localStorage.getItem("itemList"))){
     let temp = JSON.parse(localStorage.getItem("itemList"));
     let data = temp.find(data => data.name === item);
    //  console.log("item",item,"data",data);

     if(!data){
       console.log("inside if");
     let obj = {"name":item,"user":[0,0]}
     obj.user[i]=1;
     temp.push(obj);
     console.log("temp",temp);
     localStorage.setItem("itemList",JSON.stringify(temp));
     }
     else{
       console.log("inside else");
       data.user[i]=1;
       localStorage.setItem("itemList",JSON.stringify(temp));
       console.log("temp else",temp);
     }
      this.requestedItemList[i].splice(d,1);
        
      localStorage.setItem("requestedItemList",JSON.stringify(this.requestedItemList))
  }

}
logOut()
{ sessionStorage.clear();
  this.router.navigate(['/','login-page']);
}
}

