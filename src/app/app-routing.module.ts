import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
//  {path:'menu',component:MenuComponent},
  {path:'cart',component:CartComponent},
  //{path:'login',component:LoginComponent},
 // {path:'register',component:RegisterComponent},
 // {path:'about us',component:AboutusComponent},
 // {path:'contact us',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
