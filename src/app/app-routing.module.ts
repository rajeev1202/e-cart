import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartItemComponent} from './cart-item/cart-item.component';
import {ItemListComponent} from './item-list/item-list.component';
import {RequestedItemComponent} from './requested-item/requested-item.component';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login-page',pathMatch:'full'},
{path : 'item-list' , component: ItemListComponent},
{path: 'login-page' , component: LoginPageComponent},
{path: 'cart-item' , component:CartItemComponent},
{path: 'requested-item' , component:RequestedItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [ItemListComponent,LoginPageComponent,CartItemComponent,RequestedItemComponent ]
