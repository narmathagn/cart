import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';


const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'cart/placeorder', component: PlaceorderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
