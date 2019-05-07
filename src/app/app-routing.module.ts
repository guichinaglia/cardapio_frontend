import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './ingredients/register/register.component'
import { ReadComponent } from './ingredients/read/read.component'
import { CreationOptionsComponent } from './order-creation/creation-options/creation-options.component'
import { OrderHeaderComponent } from './orders/order-header/order-header.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'register-ingredients', component: RegisterComponent },
  {path: 'show-ingredients', component: ReadComponent},
  {path: 'create-order', component: CreationOptionsComponent},
  {path: 'show-orders', component: OrderHeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  MainPageComponent,
  RegisterComponent,
  ReadComponent,
  CreationOptionsComponent,
  OrderHeaderComponent
]