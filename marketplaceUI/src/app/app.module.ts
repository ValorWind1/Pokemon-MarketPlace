import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

import { ShinyListComponent } from './shiny-list/shiny-list.component';

import { PokeItemsComponent } from './poke-items/poke-items.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    AboutComponent,
    CartComponent


    PokeListComponent,
    NavbarComponent,
    ShinyListComponent

    NavbarComponent,
    PokeItemsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
