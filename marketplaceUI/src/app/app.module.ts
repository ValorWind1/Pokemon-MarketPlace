import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

import { ShinyListComponent } from './shiny-list/shiny-list.component';

import { PokeItemsComponent } from './poke-items/poke-items.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CartComponent,
    PokeListComponent,
    NavbarComponent,
    ShinyListComponent,
    NavbarComponent,
    PokeItemsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
