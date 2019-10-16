import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // default path
  {path: 'home', component: HomeComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'shiny-pokemon',component: shinyComponent}
  {path: 'item', component: ItemComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
