import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import {RequestedItemComponent} from './requested-item/requested-item.component';
import {ItemListComponent} from './item-list/item-list.component';
import {CartItemComponent} from './cart-item/cart-item.component'; 
import {ItemService} from './item.service';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
