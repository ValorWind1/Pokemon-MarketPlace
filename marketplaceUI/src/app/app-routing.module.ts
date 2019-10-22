import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PokeItemsComponent } from './poke-items/poke-items.component';
import { ShinyListComponent } from './shiny-list/shiny-list.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // default path
  {path: 'home', component: HomeComponent},
  {path: 'pokemon', component: PokeListComponent},
  {path: 'shiny-pokemon', component: ShinyListComponent},
  {path: 'item', component: PokeItemsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'submit', component: SubmitComponent},
  {path: '**', component: PageNotFoundComponent}   // invalid urls


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
